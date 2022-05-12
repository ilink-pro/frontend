import { RecoveryFlow } from '@atls/next-identity-integration'

import React            from 'react'

import { AuthLayout }   from '@identity/auth-layout-fragment'
import { RecoveryLink } from '@identity/recovery-link-fragment'
import { Column }       from '@ui/layout'

export const RecoveryPage = () => (
  <RecoveryFlow>
    <AuthLayout
      title='Password  Recovery'
      description='Enter the Email which should we use to recover your password'
    >
      <Column>
        <RecoveryLink />
      </Column>
    </AuthLayout>
  </RecoveryFlow>
)
