import { Inject }                     from '@nestjs/common'
import { Context }                    from '@nestjs/graphql'
import { Args }                       from '@nestjs/graphql'
import { Query }                      from '@nestjs/graphql'
import { Resolver }                   from '@nestjs/graphql'

import { FILES_SERVICE_CLIENT_TOKEN } from '@files/files-proto'
import { FilesServiceClient }         from '@files/files-proto'

import { FileLoader }                 from '../dataloaders'
import { GetFileInput }               from '../inputs'
import { GetFilesInput }              from '../inputs'
import { File }                       from '../types'

@Resolver((of) => File)
export class FilesQueries {
  constructor(
    @Inject(FILES_SERVICE_CLIENT_TOKEN) private readonly client: FilesServiceClient,
    private readonly fileLoader: FileLoader
  ) {}

  @Query((returns) => File)
  getFile(
    @Args('input')
    input: GetFileInput
  ) {
    return this.fileLoader.getFiles([input.id])[0]
  }

  @Query((returns) => File)
  getFiles(
    @Args('input', { nullable: true })
    input: GetFilesInput,
    @Context('authorization') authorization: string
  ) {
    return this.fileLoader.listFiles()
  }
}
