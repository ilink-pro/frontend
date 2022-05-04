import { Module }                          from '@nestjs/common'

import { FilesApplicationeModule }         from '@files/application-module'
import { CqrsAdapterModule }               from '@files/cqrs-adapter-module'
import { FilesGrpcAdapterModule }          from '@files/grpc-adapter-module'

@Module({
  imports: [
    CqrsAdapterModule.register(),
    FilesGrpcAdapterModule.register(),
    FilesApplicationeModule.register(),
  ],
})
export class FilesServiceEntrypointModule {}
