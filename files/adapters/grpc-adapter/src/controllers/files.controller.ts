import { GrpcExceptionsFilter }          from '@atls/nestjs-grpc-errors'
import { GrpcValidationPipe }            from '@atls/nestjs-grpc-errors'
import { Controller }                    from '@nestjs/common'
import { UseFilters }                    from '@nestjs/common'
import { UsePipes }                      from '@nestjs/common'
import { QueryBus }                      from '@nestjs/cqrs'
import { Payload }                       from '@nestjs/microservices'

import { GetFilesQuery }                 from '@files/application-module'
import { ListFilesResponse }             from '@files/files-proto'
import { FilesServiceControllerMethods } from '@files/files-proto'
import { FilesServiceController }        from '@files/files-proto'

import { ListFilesDto }                  from '../dto'

@Controller()
@FilesServiceControllerMethods()
@UseFilters(new GrpcExceptionsFilter())
export class FilesController implements FilesServiceController {
  constructor(private readonly queryBus: QueryBus) {}

  @UsePipes(new GrpcValidationPipe())
  async listFiles(@Payload() request: ListFilesDto): Promise<ListFilesResponse> {
    return this.queryBus.execute(new GetFilesQuery(request.pager, request.order, request.query))
  }
}
