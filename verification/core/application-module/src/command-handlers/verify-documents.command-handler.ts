import { Inject }                         from '@nestjs/common'
import { CommandHandler }                 from '@nestjs/cqrs'
import { ICommandHandler }                from '@nestjs/cqrs'

import assert                             from 'assert'

import { SUMSUB_SERVICE }                 from '@verification/domain-module'
import { SumsubServicePort }              from '@verification/domain-module'
import { DocumentMetadata }               from '@verification/domain-module'

import { VerifyDocumentsCommand }         from '../commands'
import { ApplicantIdEmptyValueException } from '../exceptions'

@CommandHandler(VerifyDocumentsCommand)
export class VerifyDocumentsCommandHandler
  implements ICommandHandler<VerifyDocumentsCommand, void>
{
  constructor(
    @Inject(SUMSUB_SERVICE)
    private readonly sumsubService: SumsubServicePort
  ) {}

  async execute(command: VerifyDocumentsCommand) {
    assert.ok(command.applicantId, new ApplicantIdEmptyValueException())

    const { applicant } = await this.sumsubService.getApplicant(command.applicantId)

    const documentMetadata: DocumentMetadata = {
      idDocType: command.type,
      country: applicant.info.country,
      firstName: applicant.fixedInfo.firstName,
      lastName: applicant.fixedInfo.lastName,
      dob: applicant.info.dob,
      placeOfBirth: applicant.info.placeOfBirth,
    }

    await this.sumsubService.addIdDocument(command.applicantId, command.document.frontSide, {
      idDocSubType: 'FRONT_SIDE',
      ...documentMetadata,
    })

    await this.sumsubService.addIdDocument(command.applicantId, command.document.backSide, {
      idDocSubType: 'BACK_SIDE',
      ...documentMetadata,
    })
  }
}
