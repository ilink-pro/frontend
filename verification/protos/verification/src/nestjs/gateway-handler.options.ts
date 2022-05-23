import { protobufPackage }         from '../../gen/nestjs/tech/ilink/verification/v1alpha1/verification.service'
import { verificationServicePath } from '../paths'
import { includeDirs }             from '../paths'

export const verificationGatewayHandler = {
  endpoint: process.env.VERIFICATION_SERVICE_URL || '0.0.0.0:50051',
  protoFilePath: {
    file: verificationServicePath,
    load: { arrays: true, keepCase: false, defaults: true, oneofs: true, includeDirs },
  },
  serviceName: 'VerificationService',
  packageName: protobufPackage,
  metaData: {
    authorization: ['req', 'headers', 'authorization'],
  },
}

export const verificationHandlers = [verificationGatewayHandler]
