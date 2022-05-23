import { NestLogger }                          from '@atls/nestjs-logger'
import { NestFactory }                         from '@nestjs/core'

import { serverOptions }                       from '@verification/grpc-adapter-module'

import { VerificationServiceEntrypointModule } from './verification-service-entrypoint.module'

declare const module: any

const bootstrap = async () => {
  const app = await NestFactory.create(VerificationServiceEntrypointModule, {
    logger: new NestLogger(),
  })

  app.connectMicroservice(serverOptions)

  app.enableShutdownHooks()

  await app.startAllMicroservices()
  await app.listen(3000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
