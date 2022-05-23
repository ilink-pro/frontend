import { Transport }               from '@nestjs/microservices'
import { GrpcOptions }             from '@nestjs/microservices'
import { serverReflectionPath }    from '@atls/nestjs-grpc-reflection/proto'

import { verificationServicePath } from '@verification/verification-proto'
import { protobufPackage }         from '@verification/verification-proto'
import { includeDirs }             from '@verification/verification-proto'

export const serverOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['grpc.reflection.v1alpha', protobufPackage],
    protoPath: [serverReflectionPath, verificationServicePath],
    url: '0.0.0.0:50051',
    loader: {
      arrays: true,
      enums: String,
      keepCase: false,
      defaults: true,
      oneofs: true,
      includeDirs,
    },
  },
}
