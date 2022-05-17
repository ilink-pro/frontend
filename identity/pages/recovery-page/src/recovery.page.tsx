import { RecoveryFlow }     from '@atls/next-identity-integration'

import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { AuthLayout }       from '@identity/auth-layout-fragment'
import { RecoveryLink }     from '@identity/recovery-link-fragment'
import { Column }           from '@ui/layout'

export const RecoveryPage = () => (
  <RecoveryFlow>
    <AuthLayout
      title={
        <FormattedMessage id='recovery_page.password_recovery' defaultMessage='Password Recovery' />
      }
      description={
        <FormattedMessage
          id='recovery_page.enter_email_to_recovery'
          defaultMessage='Enter the Email which should we use to recover your password'
        />
      }
    >
      <Column>
        <RecoveryLink />
      </Column>
    </AuthLayout>
  </RecoveryFlow>
)
