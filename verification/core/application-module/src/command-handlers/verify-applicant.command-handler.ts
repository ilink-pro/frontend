import { Inject }                 from '@nestjs/common'
import { CommandHandler }         from '@nestjs/cqrs'
import { ICommandHandler }        from '@nestjs/cqrs'

import assert                     from 'assert'

import { ApplicantRepository }    from '@verification/domain-module'
import { SUMSUB_SERVICE }         from '@verification/domain-module'
import { SumsubServicePort }      from '@verification/domain-module'

import { VerifyApplicantCommand } from '../commands'

@CommandHandler(VerifyApplicantCommand)
export class VerifyApplicantCommandHandler
  implements ICommandHandler<VerifyApplicantCommand, void>
{
  constructor(
    @Inject(SUMSUB_SERVICE)
    private readonly sumsubService: SumsubServicePort,
    private readonly applicantRepository: ApplicantRepository
  ) {}

  async execute(command: VerifyApplicantCommand) {
    const applicant = await this.applicantRepository.findById(command.id)

    assert.ok(applicant)

    await this.sumsubService.createApplicant({
      externalUserId: applicant.id,
      fixedInfo: {
        firstName: applicant.firstName,
        lastName: applicant.lastName,
        middleName: applicant.middleName,
        nationality: applicant.nationality,
        dob: applicant.dateOfBirth,
      },
      info: {
        country: applicant.countryOfResidence,
        addresses: [
          {
            country: applicant.countryOfResidence,
            postCode: applicant.postalCode,
            street: applicant.street,
            buildingNumber: applicant.apartmentOrHouse,
          },
        ],
      },
    })
  }
}
