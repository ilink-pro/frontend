import { Transport }                        from '@nestjs/microservices'
import { GrpcOptions }                      from '@nestjs/microservices'
import { serverReflectionPath }             from '@atls/nestjs-grpc-reflection/proto'

import { filesServicePath }                 from '@files/files-proto'
import { protobufPackage }                  from '@files/files-proto'
import { includeDirs as filesIncludeDirs }  from '@files/files-proto'
import { uploadServicePath }                from '@files/upload-proto'
import { includeDirs as uploadIncludeDirs } from '@files/upload-proto'

export const serverOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['grpc.reflection.v1alpha', protobufPackage],
    protoPath: [serverReflectionPath, uploadServicePath, filesServicePath],
    url: '0.0.0.0:50051',
    loader: {
      arrays: true,
      enums: String,
      keepCase: false,
      defaults: true,
      oneofs: true,
      includeDirs: uploadIncludeDirs.concat(filesIncludeDirs),
    },
  },
}
