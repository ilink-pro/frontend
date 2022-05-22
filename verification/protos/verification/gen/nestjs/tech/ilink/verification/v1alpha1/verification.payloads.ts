/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  DocumentType,
  IdDocument,
  VerificationStatus,
  Applicant,
  AddressDocument,
} from "../../../../tech/ilink/verification/v1alpha1/verification.types";

export const protobufPackage = "tech.ilink.verification.v1alpha1";

export interface GetAccessTokenRequest {
  userId: string;
}

export interface GetAccessTokenResponse {
  accessToken: string;
}

export interface CreateApplicantRequest {
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  nationality: string;
  countryOfBirth: string;
  countryOfResidence: string;
  reasonsForOpeningAnAccount: string;
  accountWillBeUsedFor: string;
  city: string;
  street: string;
  apartmentOrHouse: string;
  postalCode: string;
}

export interface CreateApplicantResponse {
  id: string;
}

export interface AddIdDocumentRequest {
  id: string;
  type: DocumentType;
  frontSide: Uint8Array;
  backSide: Uint8Array;
}

export interface AddIdDocumentResponse {
  success: boolean;
}

export interface AddAddressDocumentsRequest {
  id: string;
  addressDocuments: AddressDocument[];
}

export interface AddAddressDocumentsResponse {
  success: boolean;
}

export interface UpdateAddressRequest {
  id: string;
  city: string;
  apartmentOrHouse: string;
  postalCode: string;
}

export interface UpdateAddressResponse {
  id: string;
}

export interface VerifyApplicantRequest {
  id: string;
}

export interface VerifyApplicantResponse {
  id: string;
}

export interface VerifyIdentityRequest {
  identity?: VerifyIdentityRequest_Identity;
}

export interface VerifyIdentityRequest_Identity {
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  nationality: string;
  countryOfBirth: string;
  countryOfResidence: string;
  reasonsForOpeningAnAccount: string;
  accountWillBeUsedFor: string;
  city: string;
  street: string;
  apartmentOrHouse: string;
  postalCode: string;
}

export interface VerifyIdentityResponse {
  success: boolean;
  error: string;
  externalUserId: string;
}

export interface VerifyDocumentsRequest {
  applicantId: string;
  document?: IdDocument;
}

export interface VerifyDocumentsResponse {
  success: boolean;
  error: string;
}

export interface VerifyAddressesRequest {
  applicantId: string;
  addresses: AddressDocument[];
}

export interface VerifyAddressesResponse {
  success: boolean;
  error: string;
}

export interface GetVerificationStatusRequest {
  externalUserId: string;
}

export interface GetVerificationStatusResponse {
  status: VerificationStatus;
}

export interface GetApplicantRequest {
  query?: GetApplicantRequest_Query;
}

export interface GetApplicantRequest_Query {
  id: string;
  externalId: string;
}

export interface GetApplicantResponse {
  applicant?: Applicant;
}

export const TECH_ILINK_VERIFICATION_V1ALPHA1_PACKAGE_NAME =
  "tech.ilink.verification.v1alpha1";

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
