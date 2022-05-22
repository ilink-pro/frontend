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
  GetAccessTokenRequest,
  VerifyIdentityRequest,
  VerifyDocumentsRequest,
  VerifyAddressesRequest,
  GetVerificationStatusRequest,
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
}

export function VerificationServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "getAccessToken",
      "verifyIdentity",
      "verifyDocuments",
      "verifyAddresses",
      "getVerificationStatus",
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
