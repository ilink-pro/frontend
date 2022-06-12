import { Test }                             from '@nestjs/testing'

import { ApplicantRepository }              from '@verification/domain-module'

import { AddAddressDocumentCommand }        from '../commands'
import { AddAddressDocumentCommandHandler } from './add-address-document.command-handler'

describe('verification', () => {
  describe('application', () => {
    describe('add-address-document.command-handler', () => {
      let handler: AddAddressDocumentCommandHandler
      let repository: ApplicantRepository

      beforeEach(async () => {
        const testModule = await Test.createTestingModule({
          providers: [
            AddAddressDocumentCommandHandler,
            {
              provide: ApplicantRepository,
              useValue: {},
            },
          ],
        }).compile()

        handler = testModule.get(AddAddressDocumentCommandHandler)
        repository = testModule.get(ApplicantRepository)
      })

      it('should execute', async () => {
        const applicant = { addAddressDocuments: jest.fn(), commit: jest.fn() }

        repository.create = jest.fn().mockReturnValue(applicant)
        repository.save = jest.fn().mockResolvedValue(undefined)
        repository.findById = jest.fn().mockResolvedValue(applicant)

        const command = new AddAddressDocumentCommand('id', 'id2', 'fileId')

        await expect(handler.execute(command)).resolves.toEqual(undefined)

        expect(repository.save).toBeCalledTimes(1)
        expect(repository.save).toBeCalledWith(applicant)
      })
    })
  })
})
