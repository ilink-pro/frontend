import { CommandHandler }             from '@nestjs/cqrs'
import { ICommandHandler }            from '@nestjs/cqrs'

import assert                         from 'assert'

import { ApplicantRepository }        from '@verification/domain-module'

import { AddIdDocumentCommand }       from '../commands'
import { ApplicantNotFoundException } from '../exceptions'

@CommandHandler(AddIdDocumentCommand)
export class AddIdDocumentCommandHandler implements ICommandHandler<AddIdDocumentCommand, void> {
  constructor(private readonly applicantRepository: ApplicantRepository) {}

  async execute(command: AddIdDocumentCommand) {
    const applicant = await this.applicantRepository.findById(command.id)

    assert.ok(applicant, new ApplicantNotFoundException({ applicantId: command.id }))

    await applicant.addIdDocument(
      command.idDocumentId,
      command.type,
      command.frontSideId,
      command.backSideId
    )

    await this.applicantRepository.save(applicant)
  }
}
