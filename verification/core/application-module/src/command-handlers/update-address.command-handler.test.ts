import { Test }                        from '@nestjs/testing'

import { ApplicantRepository }         from '@verification/domain-module'

import { UpdateAddressCommand }        from '../commands'
import { UpdateAddressCommandHandler } from './update-address.command-handler'

describe('verification', () => {
  describe('application', () => {
    describe('update-address.command-handler', () => {
      let handler: UpdateAddressCommandHandler
      let repository: ApplicantRepository

      beforeEach(async () => {
        const testModule = await Test.createTestingModule({
          providers: [
            UpdateAddressCommandHandler,
            {
              provide: ApplicantRepository,
              useValue: {},
            },
          ],
        }).compile()

        handler = testModule.get(UpdateAddressCommandHandler)
        repository = testModule.get(ApplicantRepository)
      })

      it('should execute', async () => {
        const applicant = { updateAddress: jest.fn(), commit: jest.fn() }

        repository.create = jest.fn().mockReturnValue(applicant)
        repository.save = jest.fn().mockResolvedValue(undefined)
        repository.findById = jest.fn().mockResolvedValue(applicant)

        const command = new UpdateAddressCommand('id', 'city', 'apartmentOrHouse', 'postalCode')

        await expect(handler.execute(command)).resolves.toEqual(undefined)

        expect(repository.save).toBeCalledTimes(1)
        expect(repository.save).toBeCalledWith(applicant)
      })
    })
  })
})
