/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  DocumentType,
  VerificationStatus,
} from "../../../../tech/ilink/verification/v1alpha1/verification.types";

export const protobufPackage = "tech.ilink.verification.v1alpha1";

export interface GetAccessTokenRequest {
  userId: string;
}

export interface GetAccessTokenResponse {
  accessToken: string;
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
  applicantId: string;
}

export interface VerifyDocumentsRequest {
  applicantId: string;
  document?: VerifyDocumentsRequest_Document;
}

export interface VerifyDocumentsRequest_Document {
  type: DocumentType;
  frontSide: Uint8Array;
  backSide: Uint8Array;
}

export interface VerifyDocumentsResponse {
  success: boolean;
  error: string;
}

export interface VerifyAddressesRequest {
  applicantId: string;
  addresses: VerifyAddressesRequest_Address[];
}

export interface VerifyAddressesRequest_Address {
  file: Uint8Array;
}

export interface VerifyAddressesResponse {
  success: boolean;
  error: string;
}

export interface GetVerificationStatusRequest {
  applicantId: string;
}

export interface GetVerificationStatusResponse {
  status: VerificationStatus;
}

export const TECH_ILINK_VERIFICATION_V1ALPHA1_PACKAGE_NAME =
  "tech.ilink.verification.v1alpha1";

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
