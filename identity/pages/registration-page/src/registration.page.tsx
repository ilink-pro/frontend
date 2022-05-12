import { RegistrationFlow }     from '@atls/next-identity-integration'

import React                    from 'react'

import { AuthLayout }           from '@identity/auth-layout-fragment'
import { RegistrationPassword } from '@identity/registration-password-fragment'
import { Column }               from '@ui/layout'

export const RegistrationPage = () => (
  <RegistrationFlow>
    <AuthLayout title='Create an account' description='Enter your email, password and join us'>
      <Column fill>
        <RegistrationPassword />
      </Column>
    </AuthLayout>
  </RegistrationFlow>
)
