import { DynamicModule }  from '@nestjs/common'
import { Module }         from '@nestjs/common'

import { SUMSUB_SERVICE } from '@verification/domain-module'

import { SumsubService }  from '../services'

@Module({})
export class SumsubAdapterModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: SumsubAdapterModule,
      providers: [
        {
          provide: SUMSUB_SERVICE,
          useClass: SumsubService,
        },
      ],
      exports: [
        {
          provide: SUMSUB_SERVICE,
          useClass: SumsubService,
        },
      ],
    }
  }
}
