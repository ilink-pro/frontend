import _m0              from 'protobufjs/minimal'
/* eslint-disable */
import Long             from 'long'

import { DocumentType } from '../../../../tech/ilink/verification/v1alpha1/verification.types'

export const protobufPackage = 'tech.ilink.verification.v1alpha1'

export interface IdDocument {
  type: DocumentType
  frontSide: Uint8Array
  backSide: Uint8Array
}

export const TECH_ILINK_VERIFICATION_V1ALPHA1_PACKAGE_NAME = 'tech.ilink.verification.v1alpha1'

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}
