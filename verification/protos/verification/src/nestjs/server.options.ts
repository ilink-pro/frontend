import { Transport }               from '@nestjs/microservices'
import { GrpcOptions }             from '@nestjs/microservices'
import { serverReflectionPath }    from '@atls/nestjs-grpc-reflection/proto'

import { protobufPackage }         from '../../gen/nestjs/tech/ilink/verification/v1alpha1/verification.service'
import { verificationServicePath } from '../paths'
import { includeDirs }             from '../paths'

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
