import { Module }                        from '@nestjs/common'

import { VerificationApplicationModule } from '@verification/application-module'
import { CqrsAdapterModule }             from '@verification/cqrs-adapter-module'
import { VerificationGrpcAdapterModule } from '@verification/grpc-adapter-module'
import { SumsubAdapterModule }           from '@verification/sumsub-adapter-module'

@Module({
  imports: [
    CqrsAdapterModule.register(),
    VerificationGrpcAdapterModule.register(),
    VerificationApplicationModule.register(),
    SumsubAdapterModule.register(),
  ],
})
export class VerificationServiceEntrypointModule {}
