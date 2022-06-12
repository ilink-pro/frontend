import { Observable }         from 'rxjs'
import { v4 as uuid }         from 'uuid'

import { ListFilesRequest }   from '@files/files-proto'
import { ListFilesResponse }  from '@files/files-proto'
import { FilesServiceClient } from '@files/files-proto'

export class FilesServiceMock implements FilesServiceClient {
  listFiles(request: ListFilesRequest): Observable<ListFilesResponse> {
    return new Observable((subscriber) => {
      subscriber.next({
        files: [{ id: uuid(), url: 'https://source.unsplash.com/random' }],
        hasNextPage: '',
      })
      subscriber.complete()
    })
  }
}
