/* eslint-disable no-await-in-loop */

import { Inject }                 from '@nestjs/common'
import { CommandHandler }         from '@nestjs/cqrs'
import { ICommandHandler }        from '@nestjs/cqrs'

import assert                     from 'assert'

import { SUMSUB_SERVICE }         from '@verification/domain-module'
import { SumsubServicePort }      from '@verification/domain-module'
import { DocumentMetadata }       from '@verification/domain-module'

import { VerifyAddressesCommand } from '../commands'

@CommandHandler(VerifyAddressesCommand)
export class VerifyAddressesCommandHandler
  implements ICommandHandler<VerifyAddressesCommand, void>
{
  constructor(
    @Inject(SUMSUB_SERVICE)
    private readonly sumsubService: SumsubServicePort
  ) {}

  async execute(command: VerifyAddressesCommand) {
    assert.ok(command.applicantId)

    const { applicant } = await this.sumsubService.getApplicant(command.applicantId)

    const documentMetadata: DocumentMetadata = {
      idDocType: 'UTILITY_BILL',
      country: applicant.info.country,
      firstName: applicant.fixedInfo.firstName,
      lastName: applicant.fixedInfo.lastName,
      dob: applicant.info.dob,
      placeOfBirth: applicant.info.placeOfBirth,
    }

    for (const address of command.addresses) {
      await this.sumsubService.addIdDocument(command.applicantId, address.file, documentMetadata)
    }
  }
}
