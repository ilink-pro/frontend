import { Inject }                     from '@nestjs/common'
import { IQueryHandler }              from '@nestjs/cqrs'
import { QueryHandler }               from '@nestjs/cqrs'

import assert                         from 'assert'

import { ApplicantRepository }        from '@verification/domain-module'
import { SUMSUB_SERVICE }             from '@verification/domain-module'
import { SumsubServicePort }          from '@verification/domain-module'

import { GetVerificationStatusQuery } from '../queries'

@QueryHandler(GetVerificationStatusQuery)
export class GetVerificationStatusQueryHandler
  implements IQueryHandler<GetVerificationStatusQuery>
{
  constructor(
    @Inject(SUMSUB_SERVICE)
    private readonly sumsubService: SumsubServicePort,
    private readonly applicantRepository: ApplicantRepository
  ) {}

  async execute({ id }: GetVerificationStatusQuery) {
    const applicant = await this.applicantRepository.findById(id)

    assert.ok(applicant)

    const status = await this.sumsubService.getVerificationStatus(applicant.sumsubId)

    return { status }
  }
}
