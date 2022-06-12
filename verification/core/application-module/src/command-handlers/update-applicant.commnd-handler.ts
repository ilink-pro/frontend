import { CommandHandler }             from '@nestjs/cqrs'
import { ICommandHandler }            from '@nestjs/cqrs'

import assert                         from 'assert'

import { ApplicantRepository }        from '@verification/domain-module'

import { UpdateApplicantCommand }     from '../commands'
import { ApplicantNotFoundException } from '../exceptions'

@CommandHandler(UpdateApplicantCommand)
export class UpdateApplicantCommndHandler implements ICommandHandler<UpdateApplicantCommand, void> {
  constructor(private readonly applicantRepository: ApplicantRepository) {}

  async execute(command: UpdateApplicantCommand) {
    const applicant = await this.applicantRepository.findById(command.id)

    assert.ok(applicant, new ApplicantNotFoundException({ applicantId: command.id }))

    await applicant.update(
      command.firstName,
      command.lastName,
      command.middleName,
      command.dateOfBirth,
      command.nationality,
      command.countryOfBirth,
      command.countryOfResidence,
      command.reasonsForOpeningAnAccount,
      command.accountWillBeUsedFor
    )

    await this.applicantRepository.save(applicant)
  }
}
