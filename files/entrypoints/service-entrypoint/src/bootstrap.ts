import { NestLogger }                   from '@atls/nestjs-logger'
import { NestFactory }                  from '@nestjs/core'
import { Transport }                    from '@nestjs/microservices'

import { serverOptions }                from '@files/grpc-adapter-module'

import { FilesServiceEntrypointModule } from './files-service-entrypoint.module'

declare const module: any

const bootstrap = async () => {
  const app = await NestFactory.create(FilesServiceEntrypointModule, {
    logger: new NestLogger(),
  })

  app.connectMicroservice(serverOptions)
  app.connectMicroservice({
    name: 'FILES_SERVICE',
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://local:password@localhost:5672'],
      queue: 'files_queue',
    },
  })

  app.enableShutdownHooks()

  await app.startAllMicroservices()
  await app.listen(3000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
