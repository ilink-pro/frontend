import { Injectable }            from '@nestjs/common'
import { EventBus }              from '@nestjs/cqrs'
import { InjectRepository }      from '@nestjs/typeorm'

import { Repository }            from 'typeorm'

import { Applicant }             from '@verification/domain-module'
import { IdDocument }            from '@verification/domain-module'
import { AddressDocument }       from '@verification/domain-module'
import { ApplicantRepository }   from '@verification/domain-module'

import { ApplicantEntity }       from '../entities'
import { IdDocumentEntity }      from '../entities'
import { AddressDocumentEntity } from '../entities'

@Injectable()
export class ApplicantRepositoryImpl extends ApplicantRepository {
  constructor(
    @InjectRepository(ApplicantEntity)
    private readonly repository: Repository<ApplicantEntity>,
    private readonly eventBus: EventBus
  ) {
    super()
  }

  async save(aggregate: Applicant): Promise<void> {
    await this.repository.save(await this.aggregateToEntity(aggregate))

    if (aggregate.getUncommittedEvents().length > 0) {
      this.eventBus.publishAll(aggregate.getUncommittedEvents())
    }

    aggregate.commit()
  }

  async findById(id: string): Promise<Applicant | undefined> {
    const entity = await this.repository.findOne(
      { id },
      { relations: ['idDocument', 'addressDocuments'] }
    )

    return entity ? this.entityToAggregate(entity) : undefined
  }

  private entityToAggregate(entity: ApplicantEntity): Applicant {
    return new Applicant({
      ...entity,
      idDocument:
        entity.idDocument &&
        new IdDocument(
          entity.idDocument.id,
          entity.idDocument.type,
          entity.idDocument.frontSideId,
          entity.idDocument.backSideId
        ),
      addressDocuments: (entity.addressDocuments || []).map(
        (addressDocument) => new AddressDocument(addressDocument.id, addressDocument.fileId)
      ),
    })
  }

  private async aggregateToEntity(data: Applicant): Promise<ApplicantEntity> {
    return Object.assign(new ApplicantEntity(), data.properties, {
      idDocument:
        data.idDocument && Object.assign(new IdDocumentEntity(), data.idDocument?.properties),
      addressDocuments: (data.addressDocuments || []).map((addressDocument) =>
        Object.assign(new AddressDocumentEntity(), addressDocument.properties)),
    })
  }
}
