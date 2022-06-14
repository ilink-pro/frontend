import { join }                     from 'node:path'

import { ErrorStatus }              from '@atls/grpc-error-status'
import { DataLoaderInterceptor }    from '@atls/nestjs-dataloader'
import { ApolloDriver }             from '@nestjs/apollo'
import { ApolloDriverConfig }       from '@nestjs/apollo'
import { Module }                   from '@nestjs/common'
import { APP_INTERCEPTOR }          from '@nestjs/core'
import { GraphQLModule }            from '@nestjs/graphql'

import { FilesPublicGatewayModule } from '@files/public-gateway-module'

const playground =
  process.env.NODE_ENV !== 'production' || Boolean(process.env.PLAYGROUND)
    ? {
        settings: {
          'request.credentials': 'include',
        },
      }
    : false

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(__dirname, '../schema.graphql'),
      introspection: Boolean(playground),
      playground,
      cors: true,
      path: '///',
      context: ({ req }) => ({
        user: req.get('x-user') && req.get('x-user') !== 'guest' ? req.get('x-user') : null,
        authorization: req.get('authorization'),
      }),
      formatError: (error) => {
        if ((error.extensions.exception as any)?.metadata) {
          throw ErrorStatus.fromServiceError(error.extensions.exception as any)
        }

        return error
      },
    }),
    FilesPublicGatewayModule.register(),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    },
  ],
})
export class PublicGatewayServiceModule {}
