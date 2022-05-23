import { GatewayModule }              from '@atls/nestjs-gateway'
import { GatewaySourceType }          from '@atls/nestjs-gateway'
import { Module }                     from '@nestjs/common'

import { verificationGatewayHandler } from '@verification/verification-proto'

@Module({
  imports: [
    GatewayModule.register({
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
      transforms: {
        namingConvention: {
          fieldNames: 'camelCase',
        },
      },
      sources: [
        {
          name: 'Verification',
          type: GatewaySourceType.GRPC,
          handler: verificationGatewayHandler,
          transforms: {
            rename: {
              mode: 'bare',
              renames: [
                {
                  from: {
                    type: 'tech_ilink_verification_v1alpha1_(.*)Request_Input',
                  },
                  to: {
                    type: '$1Input',
                  },
                  useRegExpForTypes: true,
                  useRegExpForFields: true,
                },
                {
                  from: {
                    type: 'tech_ilink_verification_v1alpha1_(.*)',
                  },
                  to: {
                    type: '$1',
                  },
                  useRegExpForTypes: true,
                  useRegExpForFields: true,
                },
                {
                  from: {
                    type: 'Mutation',
                    field: 'tech_ilink_verification_v1alpha1_VerificationService_(.*)',
                  },
                  to: {
                    type: 'Mutation',
                    field: '$1',
                  },
                  useRegExpForTypes: true,
                  useRegExpForFields: true,
                },
                {
                  from: {
                    type: 'Query',
                    field: 'tech_ilink_verification_v1alpha1_VerificationService_(.*)',
                  },
                  to: {
                    type: 'Query',
                    field: '$1',
                  },
                  useRegExpForTypes: true,
                  useRegExpForFields: true,
                },
              ],
            },
          },
        },
      ],
    }),
  ],
})
export class PrivateGatewayEntrypointModule {}
