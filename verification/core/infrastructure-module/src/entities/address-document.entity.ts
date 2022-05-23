import { Entity }          from 'typeorm'
import { Column }          from 'typeorm'
import { PrimaryColumn }   from 'typeorm'
import { ManyToOne }       from 'typeorm'

import { ApplicantEntity } from './applicant.entity'

@Entity()
export class AddressDocumentEntity {
  @PrimaryColumn('uuid')
  id!: string

  @Column('bytea')
  file!: Buffer

  @ManyToOne(() => ApplicantEntity, (applicant) => applicant.addressDocuments)
  applicant!: ApplicantEntity
}
