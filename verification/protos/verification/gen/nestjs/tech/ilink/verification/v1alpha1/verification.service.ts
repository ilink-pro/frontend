/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { Metadata } from "@grpc/grpc-js";
import {
  GetAccessTokenResponse,
  VerifyIdentityResponse,
  VerifyDocumentsResponse,
  VerifyAddressesResponse,
  GetVerificationStatusResponse,
  GetApplicantResponse,
  CreateApplicantResponse,
  UpdateAddressResponse,
  VerifyApplicantResponse,
  GetAccessTokenRequest,
  VerifyIdentityRequest,
  VerifyDocumentsRequest,
  VerifyAddressesRequest,
  GetVerificationStatusRequest,
  GetApplicantRequest,
  CreateApplicantRequest,
  UpdateAddressRequest,
  VerifyApplicantRequest,
} from "../../../../tech/ilink/verification/v1alpha1/verification.payloads";

export const protobufPackage = "tech.ilink.verification.v1alpha1";

export const TECH_ILINK_VERIFICATION_V1ALPHA1_PACKAGE_NAME =
  "tech.ilink.verification.v1alpha1";

export interface VerificationServiceClient {
  getAccessToken(
    request: GetAccessTokenRequest,
    metadata?: Metadata
  ): Observable<GetAccessTokenResponse>;

  verifyIdentity(
    request: VerifyIdentityRequest,
    metadata?: Metadata
  ): Observable<VerifyIdentityResponse>;

  verifyDocuments(
    request: VerifyDocumentsRequest,
    metadata?: Metadata
  ): Observable<VerifyDocumentsResponse>;

  verifyAddresses(
    request: VerifyAddressesRequest,
    metadata?: Metadata
  ): Observable<VerifyAddressesResponse>;

  getVerificationStatus(
    request: GetVerificationStatusRequest,
    metadata?: Metadata
  ): Observable<GetVerificationStatusResponse>;

  getApplicant(
    request: GetApplicantRequest,
    metadata?: Metadata
  ): Observable<GetApplicantResponse>;

  createApplicant(
    request: CreateApplicantRequest,
    metadata?: Metadata
  ): Observable<CreateApplicantResponse>;

  updateAddress(
    request: UpdateAddressRequest,
    metadata?: Metadata
  ): Observable<UpdateAddressResponse>;

  verifyApplicant(
    request: VerifyApplicantRequest,
    metadata?: Metadata
  ): Observable<VerifyApplicantResponse>;
}

export interface VerificationServiceController {
  getAccessToken(
    request: GetAccessTokenRequest,
    metadata?: Metadata
  ):
    | Promise<GetAccessTokenResponse>
    | Observable<GetAccessTokenResponse>
    | GetAccessTokenResponse;

  verifyIdentity(
    request: VerifyIdentityRequest,
    metadata?: Metadata
  ):
    | Promise<VerifyIdentityResponse>
    | Observable<VerifyIdentityResponse>
    | VerifyIdentityResponse;

  verifyDocuments(
    request: VerifyDocumentsRequest,
    metadata?: Metadata
  ):
    | Promise<VerifyDocumentsResponse>
    | Observable<VerifyDocumentsResponse>
    | VerifyDocumentsResponse;

  verifyAddresses(
    request: VerifyAddressesRequest,
    metadata?: Metadata
  ):
    | Promise<VerifyAddressesResponse>
    | Observable<VerifyAddressesResponse>
    | VerifyAddressesResponse;

  getVerificationStatus(
    request: GetVerificationStatusRequest,
    metadata?: Metadata
  ):
    | Promise<GetVerificationStatusResponse>
    | Observable<GetVerificationStatusResponse>
    | GetVerificationStatusResponse;

  getApplicant(
    request: GetApplicantRequest,
    metadata?: Metadata
  ):
    | Promise<GetApplicantResponse>
    | Observable<GetApplicantResponse>
    | GetApplicantResponse;

  createApplicant(
    request: CreateApplicantRequest,
    metadata?: Metadata
  ):
    | Promise<CreateApplicantResponse>
    | Observable<CreateApplicantResponse>
    | CreateApplicantResponse;

  updateAddress(
    request: UpdateAddressRequest,
    metadata?: Metadata
  ):
    | Promise<UpdateAddressResponse>
    | Observable<UpdateAddressResponse>
    | UpdateAddressResponse;

  verifyApplicant(
    request: VerifyApplicantRequest,
    metadata?: Metadata
  ):
    | Promise<VerifyApplicantResponse>
    | Observable<VerifyApplicantResponse>
    | VerifyApplicantResponse;
}

export function VerificationServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "getAccessToken",
      "verifyIdentity",
      "verifyDocuments",
      "verifyAddresses",
      "getVerificationStatus",
      "getApplicant",
      "createApplicant",
      "updateAddress",
      "verifyApplicant",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod("VerificationService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcStreamMethod("VerificationService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const VERIFICATION_SERVICE_NAME = "VerificationService";

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
