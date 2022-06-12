import { CommandHandler }             from '@nestjs/cqrs'
import { ICommandHandler }            from '@nestjs/cqrs'

import assert                         from 'assert'

import { ApplicantRepository }        from '@verification/domain-module'

import { UpdateAddressCommand }       from '../commands'
import { ApplicantNotFoundException } from '../exceptions'

@CommandHandler(UpdateAddressCommand)
export class UpdateAddressCommandHandler implements ICommandHandler<UpdateAddressCommand, void> {
  constructor(private readonly applicantRepository: ApplicantRepository) {}

  async execute(command: UpdateAddressCommand) {
    const applicant = await this.applicantRepository.findById(command.id)

    assert.ok(applicant, new ApplicantNotFoundException({ applicantId: command.id }))

    await applicant.updateAddress(command.city, command.apartmentOrHouse, command.postalCode)

    await this.applicantRepository.save(applicant)
  }
}
