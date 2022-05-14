import { LoginFlow }        from '@atls/next-identity-integration'

import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { AuthLayout }       from '@identity/auth-layout-fragment'
import { LoginPassword }    from '@identity/login-password-fragment'
import { Column }           from '@ui/layout'

export const LoginPage = () => (
  <LoginFlow>
    <AuthLayout
      title={<FormattedMessage id='login_page.welcome' defaultMessage='Welcome!' />}
      description={
        <FormattedMessage
          id='login_page.enter_and_join'
          defaultMessage='Enter your email, password and join us'
        />
      }
    >
      <Column fill>
        <LoginPassword />
      </Column>
    </AuthLayout>
  </LoginFlow>
)
