import { Entity }                from 'typeorm'
import { Column }                from 'typeorm'
import { PrimaryColumn }         from 'typeorm'
import { OneToOne }              from 'typeorm'
import { OneToMany }             from 'typeorm'
import { JoinColumn }            from 'typeorm'

import { AddressDocumentEntity } from './address-document.entity'
import { IdDocumentEntity }      from './id-document.entity'

@Entity()
export class ApplicantEntity {
  @PrimaryColumn('uuid')
  id!: string

  @Column()
  firstName!: string

  @Column()
  lastName!: string

  @Column({ nullable: true })
  middleName!: string

  @Column({ nullable: true })
  dateOfBirth!: string

  @Column({ nullable: true })
  nationality!: string

  @Column({ nullable: true })
  countryOfBirth!: string

  @Column({ nullable: true })
  countryOfResidence!: string

  @Column({ nullable: true })
  reasonsForOpeningAnAccount!: string

  @Column({ nullable: true })
  accountWillBeUsedFor!: string

  @Column({ nullable: true })
  city!: string

  @Column({ nullable: true })
  street!: string

  @Column({ nullable: true })
  apartmentOrHouse!: string

  @Column({ nullable: true })
  postalCode!: string

  @Column({ nullable: true })
  sumsubId!: string

  @OneToOne(() => IdDocumentEntity, (idDocument) => idDocument.applicant, { cascade: true })
  @JoinColumn()
  idDocument!: IdDocumentEntity

  @OneToMany(() => AddressDocumentEntity, (addressDocument) => addressDocument.applicant, {
    cascade: true,
  })
  @JoinColumn()
  addressDocuments!: Array<AddressDocumentEntity>
}
