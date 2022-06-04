import { Module }                    from '@nestjs/common'
import { DynamicModule }             from '@nestjs/common'

import { FilesServiceClientModule }  from '@files/files-proto'
import { UploadServiceClientModule } from '@files/upload-proto'

import { FileLoader }                from './dataloaders'
import { UploadMutations }           from './mutations'
import { FilesQueries }              from './queries'

@Module({})
export class FilesPublicGatewayModule {
  static register(): DynamicModule {
    return {
      module: FilesPublicGatewayModule,
      imports: [UploadServiceClientModule.register(), FilesServiceClientModule.register()],
      providers: [UploadMutations, FileLoader, FilesQueries],
    }
  }
}
