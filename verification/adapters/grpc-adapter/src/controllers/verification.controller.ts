import { GrpcExceptionsFilter }                 from '@atls/nestjs-grpc-errors'
import { GrpcValidationPipe }                   from '@atls/nestjs-grpc-errors'
import { Controller }                           from '@nestjs/common'
import { UseFilters }                           from '@nestjs/common'
import { UsePipes }                             from '@nestjs/common'
import { QueryBus }                             from '@nestjs/cqrs'
import { CommandBus }                           from '@nestjs/cqrs'

import { GetAccessTokenQuery }                  from '@verification/application-module'
import { VerifyAddressesCommand }               from '@verification/application-module'
import { VerifyDocumentsCommand }               from '@verification/application-module'
import { VerifyIdentityCommand }                from '@verification/application-module'
import { GetVerificationStatusQuery }           from '@verification/application-module'
import { VerifyAddressesResponse }              from '@verification/verification-proto'
import { VerifyDocumentsResponse }              from '@verification/verification-proto'
import { VerifyIdentityResponse }               from '@verification/verification-proto'
import { GetAccessTokenResponse }               from '@verification/verification-proto'
import { GetVerificationStatusResponse }        from '@verification/verification-proto'
import { VerificationServiceControllerMethods } from '@verification/verification-proto'
import { VerificationServiceController }        from '@verification/verification-proto'

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
      identity.postalCode
    )

    await this.commandBus.execute(command)

    return {
      success: true,
      error: '',
      applicantId: '',
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
    return this.queryBus.execute(new GetVerificationStatusQuery(request.applicantId))
  }

  @UsePipes(new GrpcValidationPipe())
  async getAccessToken(request): Promise<GetAccessTokenResponse> {
    return this.queryBus.execute(new GetAccessTokenQuery(request.applicantId))
  }
}
