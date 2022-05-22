import { CommandHandler }            from '@nestjs/cqrs'
import { ICommandHandler }           from '@nestjs/cqrs'

import assert                        from 'assert'

import { ApplicantRepository }       from '@verification/domain-module'
import { AddressDocument }           from '@verification/domain-module'

import { AddAddressDocumentCommand } from '../commands'

@CommandHandler(AddAddressDocumentCommand)
export class AddAddressDocumentCommandHandler
  implements ICommandHandler<AddAddressDocumentCommand, void>
{
  constructor(private readonly applicantRepository: ApplicantRepository) {}

  async execute(command: AddAddressDocumentCommand) {
    const applicant = await this.applicantRepository.findById(command.id)

    assert.ok(applicant)

    await applicant.addAddressDocuments([
      new AddressDocument(command.addressDocumentId, command.file),
    ])

    await this.applicantRepository.save(applicant)
  }
}
