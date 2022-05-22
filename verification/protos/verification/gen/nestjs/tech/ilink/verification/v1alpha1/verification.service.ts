import { Metadata }                      from '@grpc/grpc-js'
/* eslint-disable */
import { GrpcMethod }                    from '@nestjs/microservices'
import { GrpcStreamMethod }              from '@nestjs/microservices'

import _m0                               from 'protobufjs/minimal'
import Long                              from 'long'
import { Observable }                    from 'rxjs'

import { AddAddressDocumentsRequest }    from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { AddAddressDocumentsResponse }   from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { AddIdDocumentRequest }          from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { AddIdDocumentResponse }         from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { CreateApplicantRequest }        from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { CreateApplicantResponse }       from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { GetAccessTokenRequest }         from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { GetAccessTokenResponse }        from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { GetApplicantRequest }           from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { GetApplicantResponse }          from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { GetVerificationStatusRequest }  from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { GetVerificationStatusResponse } from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { UpdateAddressRequest }          from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { UpdateAddressResponse }         from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { UpdateApplicantRequest }        from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { UpdateApplicantResponse }       from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { VerifyApplicantRequest }        from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'
import { VerifyApplicantResponse }       from '../../../../tech/ilink/verification/v1alpha1/verification.payloads'

export const protobufPackage = 'tech.ilink.verification.v1alpha1'

export const TECH_ILINK_VERIFICATION_V1ALPHA1_PACKAGE_NAME = 'tech.ilink.verification.v1alpha1'

export interface VerificationServiceClient {
  getAccessToken(
    request: GetAccessTokenRequest,
    metadata?: Metadata
  ): Observable<GetAccessTokenResponse>

  getVerificationStatus(
    request: GetVerificationStatusRequest,
    metadata?: Metadata
  ): Observable<GetVerificationStatusResponse>

  getApplicant(request: GetApplicantRequest, metadata?: Metadata): Observable<GetApplicantResponse>

  createApplicant(
    request: CreateApplicantRequest,
    metadata?: Metadata
  ): Observable<CreateApplicantResponse>

  updateAddress(
    request: UpdateAddressRequest,
    metadata?: Metadata
  ): Observable<UpdateAddressResponse>

  verifyApplicant(
    request: VerifyApplicantRequest,
    metadata?: Metadata
  ): Observable<VerifyApplicantResponse>

  addIdDocument(
    request: AddIdDocumentRequest,
    metadata?: Metadata
  ): Observable<AddIdDocumentResponse>

  addAddressDocuments(
    request: AddAddressDocumentsRequest,
    metadata?: Metadata
  ): Observable<AddAddressDocumentsResponse>

  updateApplicant(
    request: UpdateApplicantRequest,
    metadata?: Metadata
  ): Observable<UpdateApplicantResponse>
}

export interface VerificationServiceController {
  getAccessToken(
    request: GetAccessTokenRequest,
    metadata?: Metadata
  ): Promise<GetAccessTokenResponse> | Observable<GetAccessTokenResponse> | GetAccessTokenResponse

  getVerificationStatus(
    request: GetVerificationStatusRequest,
    metadata?: Metadata
  ):
    | Promise<GetVerificationStatusResponse>
    | Observable<GetVerificationStatusResponse>
    | GetVerificationStatusResponse

  getApplicant(
    request: GetApplicantRequest,
    metadata?: Metadata
  ): Promise<GetApplicantResponse> | Observable<GetApplicantResponse> | GetApplicantResponse

  createApplicant(
    request: CreateApplicantRequest,
    metadata?: Metadata
  ):
    | Promise<CreateApplicantResponse>
    | Observable<CreateApplicantResponse>
    | CreateApplicantResponse

  updateAddress(
    request: UpdateAddressRequest,
    metadata?: Metadata
  ): Promise<UpdateAddressResponse> | Observable<UpdateAddressResponse> | UpdateAddressResponse

  verifyApplicant(
    request: VerifyApplicantRequest,
    metadata?: Metadata
  ):
    | Promise<VerifyApplicantResponse>
    | Observable<VerifyApplicantResponse>
    | VerifyApplicantResponse

  addIdDocument(
    request: AddIdDocumentRequest,
    metadata?: Metadata
  ): Promise<AddIdDocumentResponse> | Observable<AddIdDocumentResponse> | AddIdDocumentResponse

  addAddressDocuments(
    request: AddAddressDocumentsRequest,
    metadata?: Metadata
  ):
    | Promise<AddAddressDocumentsResponse>
    | Observable<AddAddressDocumentsResponse>
    | AddAddressDocumentsResponse

  updateApplicant(
    request: UpdateApplicantRequest,
    metadata?: Metadata
  ):
    | Promise<UpdateApplicantResponse>
    | Observable<UpdateApplicantResponse>
    | UpdateApplicantResponse
}

export function VerificationServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'getAccessToken',
      'getVerificationStatus',
      'getApplicant',
      'createApplicant',
      'updateAddress',
      'verifyApplicant',
      'addIdDocument',
      'addAddressDocuments',
      'updateApplicant',
    ]
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method)
      GrpcMethod('VerificationService', method)(constructor.prototype[method], method, descriptor)
    }
    const grpcStreamMethods: string[] = []
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method)
      GrpcStreamMethod('VerificationService', method)(
        constructor.prototype[method],
        method,
        descriptor
      )
    }
  }
}

export const VERIFICATION_SERVICE_NAME = 'VerificationService'

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}
