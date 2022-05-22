import { Inject }              from '@nestjs/common'
import { IQueryHandler }       from '@nestjs/cqrs'
import { QueryHandler }        from '@nestjs/cqrs'

import { SUMSUB_SERVICE }      from '@verification/domain-module'
import { SumsubServicePort }   from '@verification/domain-module'

import { GetAccessTokenQuery } from '../queries'

@QueryHandler(GetAccessTokenQuery)
export class GetAccessTokenQueryHandler implements IQueryHandler<GetAccessTokenQuery> {
  constructor(
    @Inject(SUMSUB_SERVICE)
    private readonly sumsubService: SumsubServicePort
  ) {}

  async execute({ applicantId }: GetAccessTokenQuery) {
    return this.sumsubService.generateAccessToken(applicantId)
  }
}
