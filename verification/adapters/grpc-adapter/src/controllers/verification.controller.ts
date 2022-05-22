import { GrpcExceptionsFilter }                 from '@atls/nestjs-grpc-errors'
import { GrpcValidationPipe }                   from '@atls/nestjs-grpc-errors'
import { Controller }                           from '@nestjs/common'
import { UseFilters }                           from '@nestjs/common'
import { UsePipes }                             from '@nestjs/common'
import { QueryBus }                             from '@nestjs/cqrs'
import { CommandBus }                           from '@nestjs/cqrs'

import { v4 as uuid }                           from 'uuid'

import { GetAccessTokenQuery }                  from '@verification/application-module'
import { VerifyApplicantCommand }               from '@verification/application-module'
import { VerifyAddressesCommand }               from '@verification/application-module'
import { VerifyDocumentsCommand }               from '@verification/application-module'
import { VerifyIdentityCommand }                from '@verification/application-module'
import { AddAddressDocumentCommand }            from '@verification/application-module'
import { AddIdDocumentCommand }                 from '@verification/application-module'
import { GetVerificationStatusQuery }           from '@verification/application-module'
import { UpdateAddressCommand }                 from '@verification/application-module'
import { CreateApplicantCommand }               from '@verification/application-module'
import { GetApplicantQuery }                    from '@verification/application-module'
import { VerifyAddressesResponse }              from '@verification/verification-proto'
import { VerifyDocumentsResponse }              from '@verification/verification-proto'
import { VerifyIdentityResponse }               from '@verification/verification-proto'
import { GetAccessTokenResponse }               from '@verification/verification-proto'
import { GetVerificationStatusResponse }        from '@verification/verification-proto'
import { GetApplicantResponse }                 from '@verification/verification-proto'
import { VerificationServiceControllerMethods } from '@verification/verification-proto'
import { VerificationServiceController }        from '@verification/verification-proto'
import { CreateApplicantResponse }              from '@verification/verification-proto'
import { UpdateAddressResponse }                from '@verification/verification-proto'
import { AddIdDocumentResponse }                from '@verification/verification-proto'
import { AddAddressDocumentsResponse }          from '@verification/verification-proto'
import { VerifyApplicantResponse }              from '@verification/verification-proto'

@Controller()
@VerificationServiceControllerMethods()
@UseFilters(new GrpcExceptionsFilter())
export class VerificationController implements VerificationServiceController {
  constructor(private readonly queryBus: QueryBus, private readonly commandBus: CommandBus) {}

  @UsePipes(new GrpcValidationPipe())
  async verifyIdentity(request): Promise<VerifyIdentityResponse> {
    const { identity } = request

    const command = new VerifyIdentityCommand(
      identity.firstName,
      identity.lastName,
      identity.middleName,
      identity.dateOfBirth,
      identity.nationality,
      identity.countryOfBirth,
      identity.countryOfResidence,
      identity.reasonsForOpeningAnAccount,
      identity.accountWillBeUsedFor,
      identity.city,
      identity.street,
      identity.apartmentOrHouse,
      identity.postalCode,
      uuid()
    )

    await this.commandBus.execute(command)

    return {
      success: true,
      error: '',
      externalUserId: command.externalUserId,
    }
  }

  @UsePipes(new GrpcValidationPipe())
  async verifyDocuments(request): Promise<VerifyDocumentsResponse> {
    const command = new VerifyDocumentsCommand(
      request.applicantId,
      request.document.type,
      request.document
    )

    await this.commandBus.execute(command)

    return {
      success: true,
      error: '',
    }
  }

  @UsePipes(new GrpcValidationPipe())
  async verifyAddresses(request): Promise<VerifyAddressesResponse> {
    const command = new VerifyAddressesCommand(request.applicantId, request.addresses)

    await this.commandBus.execute(command)

    return {
      success: true,
      error: '',
    }
  }

  @UsePipes(new GrpcValidationPipe())
  async getVerificationStatus(request): Promise<GetVerificationStatusResponse> {
    return this.queryBus.execute(new GetVerificationStatusQuery(request.externalUserId))
  }

  @UsePipes(new GrpcValidationPipe())
  async getAccessToken(request): Promise<GetAccessTokenResponse> {
    return this.queryBus.execute(new GetAccessTokenQuery(request.applicantId))
  }

  @UsePipes(new GrpcValidationPipe())
  async getApplicant(request): Promise<GetApplicantResponse> {
    return this.queryBus.execute(new GetApplicantQuery(request.query))
  }

  @UsePipes(new GrpcValidationPipe())
  async createApplicant(request): Promise<CreateApplicantResponse> {
    const command = new CreateApplicantCommand(
      uuid(),
      request.firstName,
      request.lastName,
      request.middleName,
      request.dateOfBirth,
      request.nationality,
      request.countryOfBirth,
      request.countryOfResidence,
      request.reasonsForOpeningAnAccount,
      request.accountWillBeUsedFor,
      request.city,
      request.street,
      request.apartmentOrHouse,
      request.postalCode
    )

    await this.commandBus.execute(command)

    return { id: command.id }
  }

  @UsePipes(new GrpcValidationPipe())
  async updateAddress(request): Promise<UpdateAddressResponse> {
    const command = new UpdateAddressCommand(
      request.id,
      request.city,
      request.apartmentOrHouse,
      request.postalCode
    )

    await this.commandBus.execute(command)

    return { id: command.id }
  }

  @UsePipes(new GrpcValidationPipe())
  async verifyApplicant(request): Promise<VerifyApplicantResponse> {
    const command = new VerifyApplicantCommand(request.id)

    await this.commandBus.execute(command)

    return { id: command.id }
  }

  @UsePipes(new GrpcValidationPipe())
  async addIdDocument(request): Promise<AddIdDocumentResponse> {
    const command = new AddIdDocumentCommand(
      request.id,
      uuid(),
      request.type,
      request.frontSide,
      request.backSide
    )

    await this.commandBus.execute(command)

    return { success: true }
  }

  @UsePipes(new GrpcValidationPipe())
  async addAddressDocuments(request): Promise<AddAddressDocumentsResponse> {
    for (const address of request.addressDocuments) {
      await this.commandBus.execute(new AddAddressDocumentCommand(request.id, uuid(), address.file))
    }

    return { success: true }
  }
}
