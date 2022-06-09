import * as CommandHandlers from '../command-handlers'
import * as QueryHandlers   from '../query-handlers'

import { DynamicModule }    from '@nestjs/common'
import { Module }           from '@nestjs/common'
import { ClientsModule }    from '@nestjs/microservices'
import { Transport }        from '@nestjs/microservices'

@Module({})
export class VerificationApplicationModule {
  static register(): DynamicModule {
    return {
      imports: [
        ClientsModule.register([
          {
            name: 'FILES_SERVICE',
            transport: Transport.RMQ,
            options: {
              urls: ['amqp://local:password@localhost:5672'],
              queue: 'files_queue',
            },
          },
        ]),
      ],
      module: VerificationApplicationModule,
      providers: [...Object.values(CommandHandlers), ...Object.values(QueryHandlers)],
    }
  }
}
