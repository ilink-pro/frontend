import { CommandHandler }         from '@nestjs/cqrs'
import { ICommandHandler }        from '@nestjs/cqrs'

import { ApplicantRepository }    from '@verification/domain-module'

import { CreateApplicantCommand } from '../commands'

@CommandHandler(CreateApplicantCommand)
export class CreateApplicantCommandHandler
  implements ICommandHandler<CreateApplicantCommand, void>
{
  constructor(private readonly applicantRepository: ApplicantRepository) {}

  async execute(command: CreateApplicantCommand) {
    const applicant = this.applicantRepository.create()

    await applicant.create(
      command.id,
      command.firstName,
      command.lastName,
      command.middleName,
      command.dateOfBirth,
      command.nationality,
      command.countryOfBirth,
      command.countryOfResidence,
      command.reasonsForOpeningAnAccount,
      command.accountWillBeUsedFor,
      command.city,
      command.street,
      command.apartmentOrHouse,
      command.postalCode
    )

    await this.applicantRepository.save(applicant)
  }
}
