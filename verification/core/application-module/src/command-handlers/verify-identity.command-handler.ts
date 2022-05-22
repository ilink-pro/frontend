import { Inject }                from '@nestjs/common'
import { CommandHandler }        from '@nestjs/cqrs'
import { ICommandHandler }       from '@nestjs/cqrs'

import { SUMSUB_SERVICE }        from '@verification/domain-module'
import { SumsubServicePort }     from '@verification/domain-module'

import { VerifyIdentityCommand } from '../commands'

@CommandHandler(VerifyIdentityCommand)
export class VerifyIdentityCommandHandler implements ICommandHandler<VerifyIdentityCommand, void> {
  constructor(
    @Inject(SUMSUB_SERVICE)
    private readonly sumsubService: SumsubServicePort
  ) {}

  async execute(command: VerifyIdentityCommand) {
    await this.sumsubService.createApplicant({
      externalUserId: command.externalUserId,
      fixedInfo: {
        firstName: command.firstName,
        lastName: command.lastName,
        middleName: command.middleName,
        dob: command.dateOfBirth,
        nationality: command.nationality,
        countryOfBirth: command.countryOfBirth,
      },
    })
  }
}
