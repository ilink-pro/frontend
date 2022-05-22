import { CommandHandler }       from '@nestjs/cqrs'
import { ICommandHandler }      from '@nestjs/cqrs'

import assert                   from 'assert'

import { ApplicantRepository }  from '@verification/domain-module'

import { AddIdDocumentCommand } from '../commands'

@CommandHandler(AddIdDocumentCommand)
export class AddIdDocumentCommandHandler implements ICommandHandler<AddIdDocumentCommand, void> {
  constructor(private readonly applicantRepository: ApplicantRepository) {}

  async execute(command: AddIdDocumentCommand) {
    const applicant = await this.applicantRepository.findById(command.id)

    assert.ok(applicant)

    await applicant.addIdDocument(
      command.idDocumentId,
      command.type,
      command.frontSide,
      command.backSide
    )

    await this.applicantRepository.save(applicant)
  }
}
