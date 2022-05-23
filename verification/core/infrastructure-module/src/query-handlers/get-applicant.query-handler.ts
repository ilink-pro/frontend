import { IQueryHandler }     from '@nestjs/cqrs'
import { QueryHandler }      from '@nestjs/cqrs'
import { InjectRepository }  from '@nestjs/typeorm'

import { Repository }        from 'typeorm'

import { GetApplicantQuery } from '@verification/application-module'

import { ApplicantEntity }   from '../entities'

@QueryHandler(GetApplicantQuery)
export class GetApplicantQueryHandler implements IQueryHandler<GetApplicantQuery> {
  constructor(
    @InjectRepository(ApplicantEntity)
    private readonly repository: Repository<ApplicantEntity>
  ) {}

  async execute({ query }: GetApplicantQuery) {
    const qb = await this.repository.createQueryBuilder('applicant')
    // .leftJoinAndSelect('applicant.idDocument', 'idDocument')
    // .leftJoinAndSelect('applicant.addressDocuments', 'addressDocuments')

    if (query?.id) {
      qb.andWhere('applicant.id = :id', { id: query.id })
    }

    const applicant = await qb.getOne()

    return { applicant }
  }
}
