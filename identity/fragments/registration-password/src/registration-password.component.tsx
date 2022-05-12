import { Button }           from '@ilink-ui-proto/button'
import { Input }            from '@ilink-ui-proto/input'
import { FlowNode }         from '@atls/next-identity-integration'
import { FlowNodeMessages } from '@atls/next-identity-integration'
import { FlowSubmit }       from '@atls/next-identity-integration'

import React                from 'react'
import { FC }               from 'react'
import { useState }         from 'react'

import { FieldMessages }    from '@identity/messages-fragment'
import { Condition }        from '@ui/condition'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'

interface Message {
  id: string
  type: string
  text: string
}

const RegistrationPassword: FC = () => {
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [message, setMessage] = useState<Message>({ id: '', type: '', text: '' })

  return (
    <Column fill>
      <Row height={80}>
        <Column fill>
          <FlowNode name='traits.email'>
            {({ attributes }, value, onChange) => (
              <Row height={56}>
                <Input placeholder='Your email' value={value} onChange={onChange} {...attributes} />
              </Row>
            )}
          </FlowNode>
          <Layout flexBasis={12} />
          <FlowNodeMessages name='traits.email'>
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
                  placeholder='Create your password'
                  value={value}
                  onChange={(newValue) => {
                    setPassword(newValue)
                    onChange(newValue)
                  }}
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
      <Row height={80}>
        <Column fill>
          <Row height={56}>
            <Input
              placeholder='Repeat your password'
              value={confirmPassword}
              onChange={setConfirmPassword}
              type='password'
            />
          </Row>
          <Condition match={!!message.id}>
            <Layout flexBasis={12} />
            <FieldMessages messages={[message as any]} />
          </Condition>
        </Column>
      </Row>
      <Layout width={['100%', '100%', 240]}>
        <FlowSubmit>
          {({ submitting, onSubmit }) => (
            <Button
              disabled={submitting}
              size='large'
              onClick={() => {
                if (password !== confirmPassword) {
                  setMessage({ id: 'confirm', type: 'error', text: 'Passwords do not match' })
                } else {
                  setMessage({ id: '', type: '', text: '' })
                  onSubmit()
                }
              }}
            >
              Create new account
            </Button>
          )}
        </FlowSubmit>
      </Layout>
    </Column>
  )
}

export { RegistrationPassword }
