import { RegistrationFlow }     from '@atls/next-identity-integration'

import React                    from 'react'
import { FormattedMessage }     from 'react-intl'

import { AuthLayout }           from '@identity/auth-layout-fragment'
import { RegistrationPassword } from '@identity/registration-password-fragment'
import { Column }               from '@ui/layout'

export const RegistrationPage = () => (
  <RegistrationFlow>
    <AuthLayout
      title={
        <FormattedMessage
          id='registration_page.create_an_account'
          defaultMessage='Create an account'
        />
      }
      description={
        <FormattedMessage
          id='registration_page.enter_and_join'
          defaultMessage='Enter your email, password and join us'
        />
      }
    >
      <Column fill>
        <RegistrationPassword />
      </Column>
    </AuthLayout>
  </RegistrationFlow>
)
