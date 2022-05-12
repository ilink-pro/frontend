import { LoginFlow }     from '@atls/next-identity-integration'

import React             from 'react'

import { AuthLayout }    from '@identity/auth-layout-fragment'
import { LoginPassword } from '@identity/login-password-fragment'
import { Column }        from '@ui/layout'

export const LoginPage = () => (
  <LoginFlow>
    <AuthLayout title='Welcome!' description='Enter your email, password and join us'>
      <Column fill>
        <LoginPassword />
      </Column>
    </AuthLayout>
  </LoginFlow>
)
