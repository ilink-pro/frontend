import { SettingsFlow }        from '@atls/next-identity-integration'

import React                   from 'react'
import { QueryClient }         from 'react-query'
import { QueryClientProvider } from 'react-query'

import { KYC }                 from '@identity/kyc-fragment'

export const KYCPage = () => (
  <SettingsFlow>
    <QueryClientProvider client={new QueryClient()}>
      <KYC />
    </QueryClientProvider>
  </SettingsFlow>
)
