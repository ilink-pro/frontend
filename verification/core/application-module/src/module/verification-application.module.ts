import * as CommandHandlers         from '../command-handlers'
import * as QueryHandlers           from '../query-handlers'

import { DynamicModule }            from '@nestjs/common'
import { Module }                   from '@nestjs/common'

import { FilesServiceClientModule } from '@files/files-proto'

@Module({})
export class VerificationApplicationModule {
  static register(): DynamicModule {
    return {
      imports: [FilesServiceClientModule.register({ url: 'files:50051' })],
      module: VerificationApplicationModule,
      providers: [...Object.values(CommandHandlers), ...Object.values(QueryHandlers)],
    }
  }
}
