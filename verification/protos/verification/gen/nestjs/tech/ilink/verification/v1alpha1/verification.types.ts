/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "tech.ilink.verification.v1alpha1";

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
  token: string;
  userId: string;
}

export const TECH_ILINK_VERIFICATION_V1ALPHA1_PACKAGE_NAME =
  "tech.ilink.verification.v1alpha1";

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
