import _m0                    from 'protobufjs/minimal'
/* eslint-disable */
import Long                   from 'long'

import { AddressDocument }    from '../../../../tech/ilink/verification/v1alpha1/verification.types'
import { Applicant }          from '../../../../tech/ilink/verification/v1alpha1/verification.types'
import { DocumentType }       from '../../../../tech/ilink/verification/v1alpha1/verification.types'
import { VerificationStatus } from '../../../../tech/ilink/verification/v1alpha1/verification.types'

export const protobufPackage = 'tech.ilink.verification.v1alpha1'

export interface GetAccessTokenRequest {
  id: string
}

export interface GetAccessTokenResponse {
  accessToken: string
}

export interface CreateApplicantRequest {
  firstName: string
  lastName: string
  middleName: string
  dateOfBirth: string
  nationality: string
  countryOfBirth: string
  countryOfResidence: string
  reasonsForOpeningAnAccount: string
  accountWillBeUsedFor: string
  city: string
  street: string
  apartmentOrHouse: string
  postalCode: string
}

export interface CreateApplicantResponse {
  id: string
}

export interface AddIdDocumentRequest {
  id: string
  type: DocumentType
  frontSideId: string
  backSideId: string
}

export interface AddIdDocumentResponse {
  success: boolean
}

export interface AddAddressDocumentsRequest {
  id: string
  addressDocuments: AddressDocument[]
}

export interface AddAddressDocumentsResponse {
  success: boolean
}

export interface UpdateAddressRequest {
  id: string
  city: string
  apartmentOrHouse: string
  postalCode: string
}

export interface UpdateAddressResponse {
  id: string
}

export interface VerifyApplicantRequest {
  id: string
}

export interface VerifyApplicantResponse {
  id: string
}

export interface GetVerificationStatusRequest {
  id: string
}

export interface GetVerificationStatusResponse {
  status: VerificationStatus
}

export interface GetApplicantRequest {
  query?: GetApplicantRequest_Query
}

export interface GetApplicantRequest_Query {
  id: string
  externalId: string
}

export interface GetApplicantResponse {
  applicant?: Applicant
}

export interface UpdateApplicantRequest {
  id: string
  firstName: string
  lastName: string
  middleName: string
  dateOfBirth: string
  nationality: string
  countryOfBirth: string
  countryOfResidence: string
  reasonsForOpeningAnAccount: string
  accountWillBeUsedFor: string
}

export interface UpdateApplicantResponse {
  id: string
}

export const TECH_ILINK_VERIFICATION_V1ALPHA1_PACKAGE_NAME = 'tech.ilink.verification.v1alpha1'

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}
