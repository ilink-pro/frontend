/* eslint-disable no-await-in-loop */

import { GrpcExceptionsFilter }                 from '@atls/nestjs-grpc-errors'
import { GrpcValidationPipe }                   from '@atls/nestjs-grpc-errors'
import { Controller }                           from '@nestjs/common'
import { UseFilters }                           from '@nestjs/common'
import { UsePipes }                             from '@nestjs/common'
import { QueryBus }                             from '@nestjs/cqrs'
import { CommandBus }                           from '@nestjs/cqrs'

import { v4 as uuid }                           from 'uuid'

import { GetAccessTokenQuery }                  from '@verification/application-module'
import { UpdateApplicantCommand }               from '@verification/application-module'
import { VerifyApplicantCommand }               from '@verification/application-module'
import { AddAddressDocumentCommand }            from '@verification/application-module'
import { AddIdDocumentCommand }                 from '@verification/application-module'
import { GetVerificationStatusQuery }           from '@verification/application-module'
import { UpdateAddressCommand }                 from '@verification/application-module'
import { CreateApplicantCommand }               from '@verification/application-module'
import { GetApplicantQuery }                    from '@verification/application-module'
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
import { UpdateApplicantResponse }              from '@verification/verification-proto'

import { GetVerificationStatusDto }             from '../dto'
import { GetAccessTokenDto }                    from '../dto'
import { GetApplicantDto }                      from '../dto'
import { CreateApplicantDto }                   from '../dto'
import { UpdateAddressDto }                     from '../dto'
import { VerifyApplicantDto }                   from '../dto'
import { AddIdDocumentDto }                     from '../dto'
import { AddAddressDocumentsDto }               from '../dto'
import { UpdateApplicantDto }                   from '../dto'

@Controller()
@VerificationServiceControllerMethods()
@UseFilters(new GrpcExceptionsFilter())
export class VerificationController implements VerificationServiceController {
  constructor(private readonly queryBus: QueryBus, private readonly commandBus: CommandBus) {}

  @UsePipes(new GrpcValidationPipe())
  async getVerificationStatus(
    request: GetVerificationStatusDto
  ): Promise<GetVerificationStatusResponse> {
    return this.queryBus.execute(new GetVerificationStatusQuery(request.id))
  }

  @UsePipes(new GrpcValidationPipe())
  async getAccessToken(request: GetAccessTokenDto): Promise<GetAccessTokenResponse> {
    return this.queryBus.execute(new GetAccessTokenQuery(request.id))
  }

  @UsePipes(new GrpcValidationPipe())
  async getApplicant(request: GetApplicantDto): Promise<GetApplicantResponse> {
    return this.queryBus.execute(new GetApplicantQuery(request.query))
  }

  @UsePipes(new GrpcValidationPipe())
  async createApplicant(request: CreateApplicantDto): Promise<CreateApplicantResponse> {
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
  async updateAddress(request: UpdateAddressDto): Promise<UpdateAddressResponse> {
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
  async verifyApplicant(request: VerifyApplicantDto): Promise<VerifyApplicantResponse> {
    const command = new VerifyApplicantCommand(request.id)

    await this.commandBus.execute(command)

    return { id: command.id }
  }

  @UsePipes(new GrpcValidationPipe())
  async addIdDocument(request: AddIdDocumentDto): Promise<AddIdDocumentResponse> {
    const command = new AddIdDocumentCommand(
      request.id,
      uuid(),
      request.type,
      request.frontSideId,
      request.backSideId
    )

    await this.commandBus.execute(command)

    return { success: true }
  }

  @UsePipes(new GrpcValidationPipe())
  async addAddressDocuments(request: AddAddressDocumentsDto): Promise<AddAddressDocumentsResponse> {
    for (const address of request.addressDocuments) {
      await this.commandBus.execute(
        new AddAddressDocumentCommand(request.id, uuid(), address.fileId)
      )
    }

    return { success: true }
  }

  @UsePipes(new GrpcValidationPipe())
  async updateApplicant(request: UpdateApplicantDto): Promise<UpdateApplicantResponse> {
    const command = new UpdateApplicantCommand(
      request.id,
      request.firstName,
      request.lastName,
      request.middleName,
      request.dateOfBirth,
      request.nationality,
      request.countryOfBirth,
      request.countryOfResidence,
      request.reasonsForOpeningAnAccount,
      request.accountWillBeUsedFor
    )

    await this.commandBus.execute(command)

    return { id: command.id }
  }
}
