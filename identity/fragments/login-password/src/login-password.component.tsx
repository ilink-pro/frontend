import { FlowNode }         from '@atls/next-identity-integration'
import { FlowNodeMessages } from '@atls/next-identity-integration'
import { FlowSubmit }       from '@atls/next-identity-integration'
import { Button }           from '@ilink-ui-proto/button'
import { Input }            from '@ilink-ui-proto/input'

import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { FieldMessages }    from '@identity/messages-fragment'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'

const LoginPassword: FC = () => {
  const { formatMessage } = useIntl()

  return (
    <Column fill>
      <Row height={80}>
        <Column fill>
          <FlowNode name='password_identifier'>
            {({ attributes }, value, onChange) => (
              <Row height={56}>
                <Input
                  {...attributes}
                  id='password_identifier'
                  placeholder={formatMessage({
                    id: 'login_password.your_email',
                    defaultMessage: 'Your email',
                  })}
                  value={value}
                  onChange={onChange}
                />
              </Row>
            )}
          </FlowNode>
          <Layout flexBasis={12} />
          <FlowNodeMessages name='password_identifier'>
            {(messages) => <FieldMessages messages={messages} />}
          </FlowNodeMessages>
        </Column>
      </Row>
      <Row height={80}>
        <Column fill>
          <FlowNode name='password'>
            {({ attributes }, value, onChange) => (
              <Row height={56}>
                <Input
                  placeholder={formatMessage({
                    id: 'login_password.password',
                    defaultMessage: 'Password',
                  })}
                  value={value}
                  onChange={onChange}
                  {...attributes}
                />
              </Row>
            )}
          </FlowNode>
          <Layout flexBasis={12} />
          <FlowNodeMessages name='password'>
            {(messages) => <FieldMessages messages={messages} />}
          </FlowNodeMessages>
        </Column>
      </Row>
      <Layout>
        <NextLink path='/auth/recovery'>Forgot password?</NextLink>
      </Layout>
      <Layout flexBasis={16} />
      <Row>
        <Layout width={['100%', '100%', 240]}>
          <FlowSubmit>
            {({ submitting, onSubmit }) => (
              <Button
                type='submit'
                onClick={() => onSubmit({ method: 'password' })}
                disabled={submitting}
                size='large'
                style={{ width: 240 }}
              >
                <FormattedMessage id='login_password.login' defaultMessage='Login' />
              </Button>
            )}
          </FlowSubmit>
        </Layout>
        <Layout flexBasis={12} />
        <Layout width={['100%', '100%', 240]}>
          <NextLink path='/auth/registration'>
            <Button variant={'secondary' as any} size='large' style={{ width: 240 }}>
              <FormattedMessage
                id='login_password.create_account'
                defaultMessage='Create account'
              />
            </Button>
          </NextLink>
        </Layout>
      </Row>
    </Column>
  )
}

export { LoginPassword }
