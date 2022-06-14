import { TypeOrmSeedingModule }                       from '@atls/nestjs-typeorm-seeding'
import { INestMicroservice }                          from '@nestjs/common'
import { Test }                                       from '@nestjs/testing'

import getPort                                        from 'get-port'
import { GenericContainer }                           from 'testcontainers'
import { StartedTestContainer }                       from 'testcontainers'
import { Wait }                                       from 'testcontainers'
import { firstValueFrom }                             from 'rxjs'
import { v4 as uuid }                                 from 'uuid'

import { FILES_SERVICE_CLIENT_TOKEN }                 from '@files/files-proto'
import { SUMSUB_SERVICE }                             from '@verification/domain-module'
import { DocumentType }                               from '@verification/domain-module'
import { VERIFICATION_INFRASTRUCTURE_MODULE_OPTIONS } from '@verification/infrastructure-module'
import { VerificationServiceClientModule }            from '@verification/verification-proto'
import { VERIFICATION_SERVICE_CLIENT_TOKEN }          from '@verification/verification-proto'
import { VerificationServiceClient }                  from '@verification/verification-proto'
import { serverOptions }                              from '@verification/verification-proto'

import { VerificationServiceEntrypointModule }        from '../src/verification-service-entrypoint.module'
import { SumsubServiceMock }                          from './mocks'
import { FilesServiceMock }                           from './mocks'

jest.setTimeout(60000)

describe('verification', () => {
  describe('grpc', () => {
    describe('verification', () => {
      let postgres: StartedTestContainer
      let service: INestMicroservice
      let client: VerificationServiceClient

      beforeAll(async () => {
        postgres = await new GenericContainer('bitnami/postgresql')
          .withWaitStrategy(Wait.forLogMessage('database system is ready to accept connections'))
          .withEnv('POSTGRESQL_PASSWORD', 'password')
          .withEnv('POSTGRESQL_DATABASE', 'db')
          .withExposedPorts(5432)
          .start()

        const port = await getPort()

        const module = await Test.createTestingModule({
          imports: [
            VerificationServiceClientModule.register({ url: `0.0.0.0:${port}` }),
            TypeOrmSeedingModule.register(),
            VerificationServiceEntrypointModule,
          ],
        })
          .overrideProvider(VERIFICATION_INFRASTRUCTURE_MODULE_OPTIONS)
          .useValue({
            db: {
              port: postgres.getMappedPort(5432),
            },
          })
          .overrideProvider(SUMSUB_SERVICE)
          .useClass(SumsubServiceMock)
          .overrideProvider(FILES_SERVICE_CLIENT_TOKEN)
          .useClass(FilesServiceMock)
          .compile()

        service = module.createNestMicroservice({
          ...serverOptions,
          options: {
            ...serverOptions.options,
            url: `0.0.0.0:${port}`,
          },
        })

        await service.listen()

        client = module.get<VerificationServiceClient>(VERIFICATION_SERVICE_CLIENT_TOKEN)
      })

      afterAll(async () => {
        await service.close()
        await postgres.stop()
      })

      it('should create applicant', async () => {
        const response = await firstValueFrom(
          client.createApplicant({
            firstName: 'firstName',
            lastName: 'lastName',
            middleName: 'middleName',
            dateOfBirth: '1996-06-20',
            nationality: 'nationality',
            countryOfBirth: 'countryOfBirth',
            countryOfResidence: 'countryOfResidence',
            reasonsForOpeningAnAccount: 'reasonsForOpeningAnAccount',
            accountWillBeUsedFor: 'accountWillBeUsedFor',
            city: 'city',
            street: 'street',
            apartmentOrHouse: 'apartmentOrHouse',
            postalCode: 'postalCode',
          })
        )

        expect(response.id).toBeDefined()
      })

      it('should update applicant address', async () => {
        const applicant = await firstValueFrom(
          client.createApplicant({
            firstName: 'firstName',
            lastName: 'lastName',
            middleName: 'middleName',
            dateOfBirth: '1996-06-20',
            nationality: 'nationality',
            countryOfBirth: 'countryOfBirth',
            countryOfResidence: 'countryOfResidence',
            reasonsForOpeningAnAccount: 'reasonsForOpeningAnAccount',
            accountWillBeUsedFor: 'accountWillBeUsedFor',
            city: 'city',
            street: 'street',
            apartmentOrHouse: 'apartmentOrHouse',
            postalCode: 'postalCode',
          })
        )

        const response = await firstValueFrom(
          client.updateAddress({
            id: applicant.id,
            city: 'city',
            apartmentOrHouse: 'apartmentOrHouse',
            postalCode: 'postalCode',
          })
        )

        expect(response.id).toBeDefined()
      })

      it('should update applicant', async () => {
        const applicant = await firstValueFrom(
          client.createApplicant({
            firstName: 'firstName',
            lastName: 'lastName',
            middleName: 'middleName',
            dateOfBirth: '1996-06-20',
            nationality: 'nationality',
            countryOfBirth: 'countryOfBirth',
            countryOfResidence: 'countryOfResidence',
            reasonsForOpeningAnAccount: 'reasonsForOpeningAnAccount',
            accountWillBeUsedFor: 'accountWillBeUsedFor',
            city: 'city',
            street: 'street',
            apartmentOrHouse: 'apartmentOrHouse',
            postalCode: 'postalCode',
          })
        )

        const response = await firstValueFrom(
          client.updateApplicant({
            id: applicant.id,
            firstName: 'firstName',
            lastName: 'lastName',
            middleName: 'middleName',
            dateOfBirth: '1996-06-20',
            nationality: 'nationality',
            countryOfBirth: 'countryOfBirth',
            countryOfResidence: 'countryOfResidence',
            reasonsForOpeningAnAccount: 'reasonsForOpeningAnAccount',
            accountWillBeUsedFor: 'accountWillBeUsedFor',
          })
        )

        expect(response.id).toBeDefined()
      })

      it('should get verification status', async () => {
        const applicant = await firstValueFrom(
          client.createApplicant({
            firstName: 'firstName',
            lastName: 'lastName',
            middleName: 'middleName',
            dateOfBirth: '1996-06-20',
            nationality: 'nationality',
            countryOfBirth: 'countryOfBirth',
            countryOfResidence: 'countryOfResidence',
            reasonsForOpeningAnAccount: 'reasonsForOpeningAnAccount',
            accountWillBeUsedFor: 'accountWillBeUsedFor',
            city: 'city',
            street: 'street',
            apartmentOrHouse: 'apartmentOrHouse',
            postalCode: 'postalCode',
          })
        )

        const response = await firstValueFrom(
          client.getVerificationStatus({
            id: applicant.id,
          })
        )

        expect(response.status).toBeDefined()
      })

      it('should get access token', async () => {
        const applicant = await firstValueFrom(
          client.createApplicant({
            firstName: 'firstName',
            lastName: 'lastName',
            middleName: 'middleName',
            dateOfBirth: '1996-06-20',
            nationality: 'nationality',
            countryOfBirth: 'countryOfBirth',
            countryOfResidence: 'countryOfResidence',
            reasonsForOpeningAnAccount: 'reasonsForOpeningAnAccount',
            accountWillBeUsedFor: 'accountWillBeUsedFor',
            city: 'city',
            street: 'street',
            apartmentOrHouse: 'apartmentOrHouse',
            postalCode: 'postalCode',
          })
        )

        const response = await firstValueFrom(
          client.getAccessToken({
            id: applicant.id,
          })
        )

        expect(response.accessToken).toBeDefined()
      })

      it('should get applicant', async () => {
        const applicant = await firstValueFrom(
          client.createApplicant({
            firstName: 'firstName',
            lastName: 'lastName',
            middleName: 'middleName',
            dateOfBirth: '1996-06-20',
            nationality: 'nationality',
            countryOfBirth: 'countryOfBirth',
            countryOfResidence: 'countryOfResidence',
            reasonsForOpeningAnAccount: 'reasonsForOpeningAnAccount',
            accountWillBeUsedFor: 'accountWillBeUsedFor',
            city: 'city',
            street: 'street',
            apartmentOrHouse: 'apartmentOrHouse',
            postalCode: 'postalCode',
          })
        )

        const response = await firstValueFrom(
          client.getApplicant({
            query: {
              id: applicant.id,
              externalId: '',
            },
          })
        )

        expect(response.applicant).toBeDefined()
        expect(response.applicant?.id).toBeDefined()
      })

      it('should verify applicant', async () => {
        const applicant = await firstValueFrom(
          client.createApplicant({
            firstName: 'firstName',
            lastName: 'lastName',
            middleName: 'middleName',
            dateOfBirth: '1996-06-20',
            nationality: 'nationality',
            countryOfBirth: 'countryOfBirth',
            countryOfResidence: 'countryOfResidence',
            reasonsForOpeningAnAccount: 'reasonsForOpeningAnAccount',
            accountWillBeUsedFor: 'accountWillBeUsedFor',
            city: 'city',
            street: 'street',
            apartmentOrHouse: 'apartmentOrHouse',
            postalCode: 'postalCode',
          })
        )

        await firstValueFrom(
          client.addIdDocument({
            id: applicant.id,
            type: DocumentType.PASSPORT,
            frontSideId: uuid(),
            backSideId: uuid(),
          })
        )

        await firstValueFrom(
          client.addAddressDocuments({
            id: applicant.id,
            addressDocuments: [{ fileId: uuid() }],
          })
        )

        const response = await firstValueFrom(
          client.verifyApplicant({
            id: applicant.id,
          })
        )

        expect(response.id).toBe(applicant.id)
      })
    })
  })
})
