import { VerificationStatus } from '../enums'

export interface CommonMetadata {
  key: string
  value: string
}

export interface DocumentMetadata {
  idDocType: string
  idDocSubType?: string
  country: string
  firstName?: string
  middleName?: string
  lastName?: string
  issuedDate?: string
  validUntil?: string
  number?: string
  dob?: string
  placeOfBirth?: string
}

export interface Address {
  country?: string
  postCode?: string
  town?: string
  street?: string
  subStreet?: string
  state?: string
  buildingName?: string
  flatNumber?: string
  buildingNumber?: string
  startDate?: string
  endDate?: string
}

export interface FixedInfo {
  firstName?: string
  lastName?: string
  middleName?: string
  firstNameEn?: string
  lastNameEn?: string
  middleNameEn?: string
  legalName?: string
  gender?: string
  dob?: string
  placeOfBirth?: string
  countryOfBirth?: string
  stateOfBirth?: string
  nationality?: string
}

export interface Info {
  country?: string
  addresses?: Array<Address>
}

export interface ApplicantPayload {
  externalUserId: string
  sourceKey?: string
  email?: string
  phone?: string
  lang?: string
  metadata?: Array<CommonMetadata>
  fixedInfo?: FixedInfo
  info?: Info
}

export interface AddIdDocumentResponse {
  idDocType: string
  errors?: Array<string>
}

export interface SumsubServicePort {
  createApplicant(payload: ApplicantPayload): Promise<{ id: string }>
  addIdDocument(
    applicantId: string,
    file: Buffer,
    metadata: DocumentMetadata
  ): Promise<AddIdDocumentResponse>
  generateAccessToken(userId: string): Promise<string>
  getVerificationStatus(applicantId: string): Promise<VerificationStatus>
  getApplicant(applicantId: string): Promise<{ applicant: any }>
}

export const SUMSUB_SERVICE = 'SUMSUB_SERVICE'
