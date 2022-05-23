import * as entities                                  from '../entities'
import * as queryHandlers                             from '../query-handlers'

import { DynamicModule }                              from '@nestjs/common'
import { Module }                                     from '@nestjs/common'
import { TypeOrmModule }                              from '@nestjs/typeorm'

import { ApplicantRepository }                        from '@verification/domain-module'

import { ApplicantRepositoryImpl }                    from '../repositories'
import { TypeOrmConfig }                              from './typeorm.config'
import { VERIFICATION_INFRASTRUCTURE_MODULE_OPTIONS } from './verification-infrastructure-module.constants'
import { VerificationTypeOrmOptions }                 from './verification-infrastructure-module.interfaces'

@Module({})
export class VerificationInfrastructureModule {
  static register(options: VerificationTypeOrmOptions = {}): DynamicModule {
    return {
      global: true,
      module: VerificationInfrastructureModule,
      imports: [
        TypeOrmModule.forFeature(Object.values(entities)),
        TypeOrmModule.forRootAsync({
          useExisting: TypeOrmConfig,
        }),
      ],
      providers: [
        ...Object.values(queryHandlers),
        TypeOrmConfig,
        {
          provide: VERIFICATION_INFRASTRUCTURE_MODULE_OPTIONS,
          useValue: options,
        },
        {
          provide: ApplicantRepository,
          useClass: ApplicantRepositoryImpl,
        },
      ],
      exports: [
        TypeOrmModule,
        TypeOrmConfig,
        {
          provide: ApplicantRepository,
          useClass: ApplicantRepositoryImpl,
        },
      ],
    }
  }
}
