import { Test }                          from '@nestjs/testing'

import { Observable }                    from 'rxjs'

import { FILES_SERVICE_CLIENT_TOKEN }    from '@files/files-proto'
import { FilesServiceClient }            from '@files/files-proto'
import { ApplicantRepository }           from '@verification/domain-module'
import { SUMSUB_SERVICE }                from '@verification/domain-module'

import { VerifyApplicantCommand }        from '../commands'
import { VerifyApplicantCommandHandler } from './verify-applicant.command-handler'

describe('verification', () => {
  describe('application', () => {
    describe('verify-applicant.command-handler', () => {
      let handler: VerifyApplicantCommandHandler
      let repository: ApplicantRepository
      let sumsubService: any
      let client: FilesServiceClient

      beforeEach(async () => {
        const testModule = await Test.createTestingModule({
          providers: [
            VerifyApplicantCommandHandler,
            {
              provide: ApplicantRepository,
              useValue: {},
            },
            {
              provide: SUMSUB_SERVICE,
              useValue: {},
            },
            {
              provide: FILES_SERVICE_CLIENT_TOKEN,
              useValue: {},
            },
          ],
        }).compile()

        handler = testModule.get(VerifyApplicantCommandHandler)
        repository = testModule.get(ApplicantRepository)
        sumsubService = testModule.get(SUMSUB_SERVICE)
        client = testModule.get(FILES_SERVICE_CLIENT_TOKEN)
      })

      it('should execute', async () => {
        const applicant = {
          addSumsubId: jest.fn(),
          commit: jest.fn(),
          idDocument: {},
          addressDocuments: [],
        }

        repository.create = jest.fn().mockReturnValue(applicant)
        repository.save = jest.fn().mockResolvedValue(undefined)
        repository.findById = jest.fn().mockResolvedValue(applicant)

        sumsubService.createApplicant = jest.fn().mockResolvedValue({ id: '' })
        sumsubService.addIdDocument = jest.fn()

        client.listFiles = jest.fn().mockReturnValue(
          new Observable((subscriber) => {
            subscriber.next({ files: [], hasNextPage: '' })
            subscriber.complete()
          })
        )

        const command = new VerifyApplicantCommand('id')

        await expect(handler.execute(command)).resolves.toEqual(undefined)

        expect(repository.save).toBeCalledTimes(1)
        expect(repository.save).toBeCalledWith(applicant)
      })
    })
  })
})
