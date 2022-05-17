import { SettingsFlow } from '@atls/next-identity-integration'

import React            from 'react'

import { KYC }          from '@identity/kyc-fragment'

export const KYCPage = () => (
  <SettingsFlow>
    <KYC />
  </SettingsFlow>
)
