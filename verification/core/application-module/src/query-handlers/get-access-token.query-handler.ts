import { Inject }              from '@nestjs/common'
import { IQueryHandler }       from '@nestjs/cqrs'
import { QueryHandler }        from '@nestjs/cqrs'

import assert                  from 'assert'

import { SUMSUB_SERVICE }      from '@verification/domain-module'
import { SumsubServicePort }   from '@verification/domain-module'
import { ApplicantRepository } from '@verification/domain-module'

import { GetAccessTokenQuery } from '../queries'

@QueryHandler(GetAccessTokenQuery)
export class GetAccessTokenQueryHandler implements IQueryHandler<GetAccessTokenQuery> {
  constructor(
    @Inject(SUMSUB_SERVICE)
    private readonly sumsubService: SumsubServicePort,
    private readonly applicantRepository: ApplicantRepository
  ) {}

  async execute({ id }: GetAccessTokenQuery) {
    const applicant = await this.applicantRepository.findById(id)

    assert.ok(applicant)

    const accessToken = await this.sumsubService.generateAccessToken(applicant.sumsubId)

    return { accessToken }
  }
}
