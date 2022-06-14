import _m0  from 'protobufjs/minimal'
/* eslint-disable */
import Long from 'long'

export const protobufPackage = 'tech.ilink.verification.v1alpha1'

export enum DocumentType {
  PASSPORT = 0,
  ID_CARD = 1,
  RESIDENCE_PERMIT = 2,
  UNRECOGNIZED = -1,
}

export enum VerificationStatus {
  PENDING = 0,
  SUCCESS = 1,
  CANCELLED = 2,
  UNRECOGNIZED = -1,
}

export interface AccessToken {
  token: string
  userId: string
}

export interface IdDocument {
  type: DocumentType
  frontSideId: string
  backSideId: string
}

export interface AddressDocument {
  fileId: string
}

export interface Applicant {
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
  city: string
  street: string
  apartmentOrHouse: string
  postalCode: string
  sumsubId: string
  idDocument?: IdDocument
  addressDocuments: AddressDocument[]
}

export const TECH_ILINK_VERIFICATION_V1ALPHA1_PACKAGE_NAME = 'tech.ilink.verification.v1alpha1'

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}
