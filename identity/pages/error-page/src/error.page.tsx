import { ErrorFlow }        from '@atls/next-identity-integration'

import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { AuthLayout }       from '@identity/auth-layout-fragment'
import { Error }            from '@identity/error-fragment'

export const ErrorPage = () => (
  <ErrorFlow>
    <AuthLayout title={<FormattedMessage id='error.error' defaultMessage='Error' />}>
      <Error />
    </AuthLayout>
  </ErrorFlow>
)
