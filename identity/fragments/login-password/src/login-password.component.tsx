import { Button }           from '@ilink-ui-proto/button'
import { Input }            from '@ilink-ui-proto/input'
import { FlowNode }         from '@atls/next-identity-integration'
import { FlowNodeMessages } from '@atls/next-identity-integration'
import { FlowSubmit }       from '@atls/next-identity-integration'

import React                from 'react'
import { FC }               from 'react'

import { FieldMessages }    from '@identity/messages-fragment'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'

const LoginPassword: FC = () => (
  <Column fill>
    <Row height={80}>
      <Column fill>
        <FlowNode name='password_identifier'>
          {({ attributes }, value, onChange) => (
            <Row height={56}>
              <Input
                id='password_identifier'
                placeholder='Your email'
                value={value}
                onChange={onChange}
                {...attributes}
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
              <Input placeholder='Password' value={value} onChange={onChange} {...attributes} />
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
            <Button onClick={onSubmit} disabled={submitting} size='large' style={{ width: 240 }}>
              Login
            </Button>
          )}
        </FlowSubmit>
      </Layout>
      <Layout flexBasis={12} />
      <Layout width={['100%', '100%', 240]}>
        <NextLink path='/auth/registration'>
          <Button variant='secondary' size='large' style={{ width: 240 }}>
            Create account
          </Button>
        </NextLink>
      </Layout>
    </Row>
  </Column>
)

export { LoginPassword }
