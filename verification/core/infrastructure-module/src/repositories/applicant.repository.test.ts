import * as entities               from '../entities'

import { CqrsModule }              from '@nestjs/cqrs'
import { Test }                    from '@nestjs/testing'
import { TypeOrmModule }           from '@nestjs/typeorm'
import { getRepositoryToken }      from '@nestjs/typeorm'

import { Repository }              from 'typeorm'
import { Connection }              from 'typeorm'
import { newDb }                   from 'pg-mem'
import { v4 as uuid }              from 'uuid'

import { Applicant }               from '@verification/domain-module'

import { ApplicantEntity }         from '../entities'
import { ApplicantRepositoryImpl } from './applicant.repository'

describe('verification', () => {
  describe('infrastructure', () => {
    describe('applicant.repository', () => {
      let repository: ApplicantRepositoryImpl
      let applicantRepository: Repository<ApplicantEntity>

      beforeAll(async () => {
        const db = newDb({
          autoCreateForeignKeyIndices: true,
        })

        db.public.registerFunction({
          implementation: () => 'test',
          name: 'current_database',
        })

        const connection = await db.adapters.createTypeormConnection({
          type: 'postgres',
          entities: Object.values(entities),
        })

        await connection.synchronize()

        const testModule = await Test.createTestingModule({
          providers: [ApplicantRepositoryImpl],
          imports: [
            CqrsModule,
            TypeOrmModule.forRoot({
              type: 'postgres',
            }),
            TypeOrmModule.forFeature(Object.values(entities)),
          ],
        })
          .overrideProvider(Connection)
          .useValue(connection)
          .compile()

        repository = testModule.get(ApplicantRepositoryImpl)
        applicantRepository = testModule.get(getRepositoryToken(ApplicantEntity))
      })

      it('should save applicant', async () => {
        const id = uuid()

        const applicant = new Applicant()

        await applicant.create(
          id,
          'firstName',
          'lastName',
          'middleName',
          'dateOfBirth',
          'nationality',
          'countryOfBirth',
          'countryOfResidence',
          'reasonsForOpeningAnAccount',
          'accountWillBeUsedFor',
          'city',
          'street',
          'apartmentOrHouse',
          'postalCode'
        )

        await repository.save(applicant)

        expect(applicantRepository.findOne({ id })).resolves.toBeDefined()
      })

      it('should add sumsub id', async () => {
        const id = uuid()

        const applicant = new Applicant()

        await applicant.create(
          id,
          'firstName',
          'lastName',
          'middleName',
          'dateOfBirth',
          'nationality',
          'countryOfBirth',
          'countryOfResidence',
          'reasonsForOpeningAnAccount',
          'accountWillBeUsedFor',
          'city',
          'street',
          'apartmentOrHouse',
          'postalCode'
        )
        await applicant.addSumsubId('sumsubId')

        await repository.save(applicant)

        expect(applicantRepository.findOne({ id })).resolves.toEqual(
          expect.objectContaining({
            sumsubId: 'sumsubId',
          })
        )
      })

      it('should update address', async () => {
        const id = uuid()

        const applicant = new Applicant()

        await applicant.create(
          id,
          'firstName',
          'lastName',
          'middleName',
          'dateOfBirth',
          'nationality',
          'countryOfBirth',
          'countryOfResidence',
          'reasonsForOpeningAnAccount',
          'accountWillBeUsedFor',
          'city',
          'street',
          'apartmentOrHouse',
          'postalCode'
        )
        await applicant.updateAddress('city1', 'apartmentOrHouse1', 'postalCode1')

        await repository.save(applicant)

        expect(applicantRepository.findOne({ id })).resolves.toEqual(
          expect.objectContaining({
            city: 'city1',
            apartmentOrHouse: 'apartmentOrHouse1',
            postalCode: 'postalCode1',
          })
        )
      })

      it('should update applicant', async () => {
        const id = uuid()

        const applicant = new Applicant()

        await applicant.create(
          id,
          'firstName',
          'lastName',
          'middleName',
          'dateOfBirth',
          'nationality',
          'countryOfBirth',
          'countryOfResidence',
          'reasonsForOpeningAnAccount',
          'accountWillBeUsedFor',
          'city',
          'street',
          'apartmentOrHouse',
          'postalCode'
        )
        await applicant.update(
          'firstName1',
          'lastName1',
          'middleName1',
          'dateOfBirth1',
          'nationality1',
          'countryOfBirth1',
          'countryOfResidence1',
          'reasonsForOpeningAnAccount1',
          'accountWillBeUsedFor1'
        )

        await repository.save(applicant)

        expect(applicantRepository.findOne({ id })).resolves.toEqual(
          expect.objectContaining({
            firstName: 'firstName1',
            lastName: 'lastName1',
            middleName: 'middleName1',
            dateOfBirth: 'dateOfBirth1',
            nationality: 'nationality1',
            countryOfBirth: 'countryOfBirth1',
            countryOfResidence: 'countryOfResidence1',
            reasonsForOpeningAnAccount: 'reasonsForOpeningAnAccount1',
            accountWillBeUsedFor: 'accountWillBeUsedFor1',
          })
        )
      })
    })
  })
})
