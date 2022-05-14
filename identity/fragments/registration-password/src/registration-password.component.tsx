import { FlowNode }         from '@atls/next-identity-integration'
import { FlowNodeMessages } from '@atls/next-identity-integration'
import { FlowSubmit }       from '@atls/next-identity-integration'
import { Button }           from '@ilink-ui-proto/button'
import { Input }            from '@ilink-ui-proto/input'

import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

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
  const { formatMessage } = useIntl()
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
                <Input
                  {...attributes}
                  placeholder={formatMessage({
                    id: 'registration_password.your_email',
                    defaultMessage: 'Your email',
                  })}
                  value={value}
                  onChange={onChange}
                />
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
                  {...attributes}
                  placeholder={formatMessage({
                    id: 'registration_password.create_your_password',
                    defaultMessage: 'Create your password',
                  })}
                  value={value}
                  onChange={(newValue) => {
                    setPassword(newValue)
                    onChange(newValue)
                  }}
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
              placeholder={formatMessage({
                id: 'registration_password.repeat_your_password',
                defaultMessage: 'Repeat your password',
              })}
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
              <FormattedMessage
                id='registration_password.create_new_account'
                defaultMessage='Create new account'
              />
            </Button>
          )}
        </FlowSubmit>
      </Layout>
    </Column>
  )
}

export { RegistrationPassword }
