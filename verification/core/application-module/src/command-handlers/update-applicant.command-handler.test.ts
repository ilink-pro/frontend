import { Test }                         from '@nestjs/testing'

import { ApplicantRepository }          from '@verification/domain-module'

import { UpdateApplicantCommand }       from '../commands'
import { UpdateApplicantCommndHandler } from './update-applicant.commnd-handler'

describe('verification', () => {
  describe('application', () => {
    describe('update-applicant.command-handler', () => {
      let handler: UpdateApplicantCommndHandler
      let repository: ApplicantRepository

      beforeEach(async () => {
        const testModule = await Test.createTestingModule({
          providers: [
            UpdateApplicantCommndHandler,
            {
              provide: ApplicantRepository,
              useValue: {},
            },
          ],
        }).compile()

        handler = testModule.get(UpdateApplicantCommndHandler)
        repository = testModule.get(ApplicantRepository)
      })

      it('should execute', async () => {
        const applicant = { update: jest.fn(), commit: jest.fn() }

        repository.create = jest.fn().mockReturnValue(applicant)
        repository.save = jest.fn().mockResolvedValue(undefined)
        repository.findById = jest.fn().mockResolvedValue(applicant)

        const command = new UpdateApplicantCommand(
          'id',
          'firstName',
          'lastName',
          'middleName',
          'dateOfBirth',
          'nationality',
          'countryOfBirth',
          'countryOfResidence',
          'reasonsForOpeningAnAccount',
          'accountWillBeUsedFor'
        )

        await expect(handler.execute(command)).resolves.toEqual(undefined)

        expect(repository.save).toBeCalledTimes(1)
        expect(repository.save).toBeCalledWith(applicant)
      })
    })
  })
})
