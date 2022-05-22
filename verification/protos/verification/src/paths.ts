/* eslint-disable */
/// <reference types='@monstrs/types-import-proto'/>

declare const __non_webpack_require__: any

import { join } from 'path'

export const verificationServicePath =
  typeof __non_webpack_require__ === 'undefined'
    ? join(__dirname, '../tech/ilink/verification/v1alpha1/verification.service.proto')
    : require('../tech/ilink/verification/v1alpha1/verification.service.proto').default

export const includeDirs = [__dirname, join(__dirname, '..')]
