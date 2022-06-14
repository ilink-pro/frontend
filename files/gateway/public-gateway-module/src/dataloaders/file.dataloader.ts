import { NestDataLoader }             from '@atls/nestjs-dataloader'
import { Inject }                     from '@nestjs/common'
import { Injectable }                 from '@nestjs/common'

import DataLoader                     from 'dataloader'
import { firstValueFrom }             from 'rxjs'
import { map }                        from 'rxjs/operators'

import { FILES_SERVICE_CLIENT_TOKEN } from '@files/files-proto'
import { FilesServiceClient }         from '@files/files-proto'
import { ListFilesResponse }          from '@files/files-proto'
import { File }                       from '@files/files-proto'

@Injectable()
export class FileLoader implements NestDataLoader {
  constructor(@Inject(FILES_SERVICE_CLIENT_TOKEN) private readonly client: FilesServiceClient) {}

  async getFiles(ids) {
    const files: Array<File> = await firstValueFrom(
      this.client
        .listFiles({
          query: {
            id: {
              in: {
                values: ids,
              },
            },
          },
        })
        .pipe(map((data: ListFilesResponse) => data.files))
    )

    const filesById = files.reduce(
      (result, file) => ({
        ...result,
        [file.id]: file,
      }),
      {}
    )

    return ids.map((id) => filesById[id])
  }

  async listFiles() {
    const files: Array<File> = await firstValueFrom(
      this.client.listFiles({}).pipe(map((data: ListFilesResponse) => data.files))
    )

    return files
  }

  generateDataLoader(): DataLoader<string[], File[]> {
    return new DataLoader((ids) => this.getFiles(ids))
  }
}
