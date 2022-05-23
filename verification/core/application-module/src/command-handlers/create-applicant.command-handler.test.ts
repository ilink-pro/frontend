import { Test }                          from '@nestjs/testing'

import { ApplicantRepository }           from '@verification/domain-module'

import { CreateApplicantCommand }        from '../commands'
import { CreateApplicantCommandHandler } from './create-applicant.command-handler'

describe('verification', () => {
  describe('application', () => {
    describe('create-applicant.command-handler', () => {
      let handler: CreateApplicantCommandHandler
      let repository: ApplicantRepository

      beforeEach(async () => {
        const testModule = await Test.createTestingModule({
          providers: [
            CreateApplicantCommandHandler,
            {
              provide: ApplicantRepository,
              useValue: {},
            },
          ],
        }).compile()

        handler = testModule.get(CreateApplicantCommandHandler)
        repository = testModule.get(ApplicantRepository)
      })

      it('should execute', async () => {
        const applicant = { create: jest.fn(), commit: jest.fn() }

        repository.create = jest.fn().mockReturnValue(applicant)
        repository.save = jest.fn().mockResolvedValue(undefined)
        repository.findById = jest.fn().mockResolvedValue(applicant)

        const command = new CreateApplicantCommand(
          'id',
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

        await expect(handler.execute(command)).resolves.toEqual(undefined)

        expect(repository.save).toBeCalledTimes(1)
        expect(repository.create).toBeCalledTimes(1)
        expect(repository.save).toBeCalledWith(applicant)
      })
    })
  })
})
