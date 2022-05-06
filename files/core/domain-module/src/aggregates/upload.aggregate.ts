import { AggregateRoot }            from '@nestjs/cqrs'

import assert                       from 'assert'
import match                        from 'mime-match'
import mime                         from 'mime-types'
import { extname }                  from 'path'
import { format }                   from 'path'
import { join }                     from 'path'
import { relative }                 from 'path'
import { format as formatUrl }      from 'url'

import { UploadCreatedEvent }       from '../events'
import { UploadConfirmedEvent }     from '../events'
import { FilesBucket }              from '../interfaces'
import { FilesBucketsRegistryPort } from '../ports'
import { StoragePort }              from '../ports'
import { File }                     from './file.aggregate'

export class Upload extends AggregateRoot {
  private id!: string

  private ownerId!: string

  private url!: string

  private name!: string

  private filename!: string

  private bucket!: FilesBucket

  private confirmed: boolean = false

  constructor(
    private readonly bucketsRegistry: FilesBucketsRegistryPort,
    private readonly storage: StoragePort
  ) {
    super()
  }

  async create(id: string, ownerId: string, bucket: string, name: string, size: number) {
    assert.ok(ownerId, 'Unknown initiator')

    const filesBucket = this.bucketsRegistry.get(bucket)

    assert.ok(filesBucket, `Files bucket ${bucket} not found`)

    const contentType = mime.lookup(name)

    assert.ok(contentType, 'Unknown file type')

    assert.ok(
      match(contentType, filesBucket.conditions.type),
      `Files bucket ${bucket} not support type '${contentType}', only '${filesBucket.conditions.type}'.`
    )

    assert.ok(
      size > filesBucket.conditions.length.min && size < filesBucket.conditions.length.max,
      `File size must be greater than ${filesBucket.conditions.length.min} and less than ${filesBucket.conditions.length.max}, current size is ${size}`
    )

    const filename = format({
      name: filesBucket.path.startsWith('/')
        ? relative('/', join(filesBucket.path, id))
        : join(filesBucket.path, id),
      ext: extname(name),
    })

    const url = await this.storage.generateUploadUrl(
      filesBucket.bucket,
      filename,
      size,
      contentType
    )

    this.apply(new UploadCreatedEvent(id, ownerId, url, name, filename, filesBucket))
  }

  onUploadCreatedEvent(event: UploadCreatedEvent) {
    this.id = event.uploadId
    this.ownerId = event.ownerId
    this.url = event.url
    this.name = event.name
    this.filename = event.filename
    this.bucket = event.bucket
  }

  async confirm(confirmatorId: string): Promise<File> {
    assert.ok(this.url, 'Upload not found.')
    assert.ok(!this.confirmed, 'Upload already confirmed.')

    assert.strictEqual(
      this.ownerId,
      confirmatorId,
      'Upload initiator does not match the endorsement.'
    )

    const metadata = await this.storage.getMetadata(this.bucket.bucket, this.filename)

    assert.ok(metadata, 'File not uploaded.')

    const signedReadUrl = await this.storage.generateReadUrl(
      this.bucket.bucket,
      this.filename,
      this.bucket.hostname
    )

    const parsedUrl = new URL(signedReadUrl)

    parsedUrl.search = ''

    const url = formatUrl(parsedUrl)

    this.apply(new UploadConfirmedEvent(this.id))

    const file = await File.create(
      this.id,
      this.ownerId,
      this.bucket.type,
      url,
      metadata.bucket,
      metadata.name,
      metadata.size,
      metadata.contentType,
      metadata.cacheControl,
      metadata.contentDisposition,
      metadata.contentEncoding,
      metadata.contentLanguage,
      metadata.metadata
    )

    return file
  }

  onUploadConfirmedEvent() {
    this.confirmed = true
  }
}
