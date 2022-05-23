import { DynamicModule }             from '@nestjs/common'
import { Module }                    from '@nestjs/common'
import { ClientProxyFactory }        from '@nestjs/microservices'
import { Transport }                 from '@nestjs/microservices'

import { VerificationServiceClient } from '../../gen/nestjs/tech/ilink/verification/v1alpha1/verification.service'
import { VERIFICATION_SERVICE_NAME } from '../../gen/nestjs/tech/ilink/verification/v1alpha1/verification.service'
import { protobufPackage }           from '../../gen/nestjs/tech/ilink/verification/v1alpha1/verification.service'
import { verificationServicePath }   from '../paths'
import { includeDirs }               from '../paths'

export interface VerificationServiceClientModuleOptions {
  url?: string
}

export const VERIFICATION_SERVICE_CLIENT_TOKEN = `${VERIFICATION_SERVICE_NAME}Client`

@Module({})
export class VerificationServiceClientModule {
  static register(options: VerificationServiceClientModuleOptions = {}): DynamicModule {
    const verificationServiceClientProvider = {
      provide: VERIFICATION_SERVICE_CLIENT_TOKEN,
      useFactory: () => {
        const client = ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            package: protobufPackage,
            url: options.url || '0.0.0.0:50051',
            protoPath: verificationServicePath,
            loader: {
              arrays: true,
              keepCase: false,
              defaults: true,
              oneofs: true,
              includeDirs,
            },
          },
        })

        return client.getService<VerificationServiceClient>(VERIFICATION_SERVICE_NAME)
      },
    }

    return {
      global: true,
      module: VerificationServiceClientModule,
      providers: [verificationServiceClientProvider],
      exports: [verificationServiceClientProvider],
    }
  }
}
