import { Test }                        from '@nestjs/testing'

import { ApplicantRepository }         from '@verification/domain-module'
import { DocumentType }                from '@verification/domain-module'

import { AddIdDocumentCommand }        from '../commands'
import { AddIdDocumentCommandHandler } from './add-id-document.command-handler'

describe('verification', () => {
  describe('application', () => {
    describe('add-id-document.command-handler', () => {
      let handler: AddIdDocumentCommandHandler
      let repository: ApplicantRepository

      beforeEach(async () => {
        const testModule = await Test.createTestingModule({
          providers: [
            AddIdDocumentCommandHandler,
            {
              provide: ApplicantRepository,
              useValue: {},
            },
          ],
        }).compile()

        handler = testModule.get(AddIdDocumentCommandHandler)
        repository = testModule.get(ApplicantRepository)
      })

      it('should execute', async () => {
        const applicant = { addIdDocument: jest.fn(), commit: jest.fn() }

        repository.create = jest.fn().mockReturnValue(applicant)
        repository.save = jest.fn().mockResolvedValue(undefined)
        repository.findById = jest.fn().mockResolvedValue(applicant)

        const command = new AddIdDocumentCommand(
          'id',
          'id2',
          DocumentType.PASSPORT,
          'file1',
          'file2'
        )

        await expect(handler.execute(command)).resolves.toEqual(undefined)

        expect(repository.save).toBeCalledTimes(1)
        expect(repository.save).toBeCalledWith(applicant)
      })
    })
  })
})
