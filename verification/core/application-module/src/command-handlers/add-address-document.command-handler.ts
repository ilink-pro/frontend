import { CommandHandler }             from '@nestjs/cqrs'
import { ICommandHandler }            from '@nestjs/cqrs'

import assert                         from 'assert'

import { ApplicantRepository }        from '@verification/domain-module'
import { AddressDocument }            from '@verification/domain-module'

import { AddAddressDocumentCommand }  from '../commands'
import { ApplicantNotFoundException } from '../exceptions'

@CommandHandler(AddAddressDocumentCommand)
export class AddAddressDocumentCommandHandler
  implements ICommandHandler<AddAddressDocumentCommand, void>
{
  constructor(private readonly applicantRepository: ApplicantRepository) {}

  async execute(command: AddAddressDocumentCommand) {
    const applicant = await this.applicantRepository.findById(command.id)

    assert.ok(applicant, new ApplicantNotFoundException({ applicantId: command.id }))

    await applicant.addAddressDocuments([
      new AddressDocument(command.addressDocumentId, command.fileId),
    ])

    await this.applicantRepository.save(applicant)
  }
}
