import { Inject }                     from '@nestjs/common'
import { IQueryHandler }              from '@nestjs/cqrs'
import { QueryHandler }               from '@nestjs/cqrs'

import { SUMSUB_SERVICE }             from '@verification/domain-module'
import { SumsubServicePort }          from '@verification/domain-module'

import { GetVerificationStatusQuery } from '../queries'

@QueryHandler(GetVerificationStatusQuery)
export class GetVerificationStatusQueryHandler
  implements IQueryHandler<GetVerificationStatusQuery>
{
  constructor(
    @Inject(SUMSUB_SERVICE)
    private readonly sumsubService: SumsubServicePort
  ) {}

  async execute({ applicantId }: GetVerificationStatusQuery) {
    const status = await this.sumsubService.getVerificationStatus(applicantId)

    return { status }
  }
}
