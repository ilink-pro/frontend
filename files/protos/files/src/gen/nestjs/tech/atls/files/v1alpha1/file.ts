import _m0  from 'protobufjs/minimal'
/* eslint-disable */
import Long from 'long'

export const protobufPackage = 'tech.atls.files.v1alpha1'

export interface File {
  id: string
  url: string
}

export const TECH_atls_FILES_V1ALPHA1_PACKAGE_NAME = 'tech.atls.files.v1alpha1'

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}
