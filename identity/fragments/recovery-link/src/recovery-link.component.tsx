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

const RecoveryLink: FC = () => {
  const { formatMessage } = useIntl()

  return (
    <Column fill>
      <Row height={80}>
        <FlowNode name='email'>
          {({ attributes }, value, onChange) => (
            <Row height={56}>
              <Input
                {...attributes}
                value={value}
                onChange={onChange}
                placeholder={formatMessage({
                  id: 'recovery_link.your_email',
                  defaultMessage: 'Your email',
                })}
              />
            </Row>
          )}
        </FlowNode>
        <Layout flexBasis={12} />
        <FlowNodeMessages name='email'>
          {(messages) => <FieldMessages messages={messages} />}
        </FlowNodeMessages>
      </Row>
      <Layout width={['100%', '100%', 240]}>
        <FlowSubmit method='link'>
          {({ submitting, onSubmit }) => (
            <Button disabled={submitting} onClick={() => onSubmit({ method: 'link' })} size='large'>
              <FormattedMessage id='recovery_link.send_code' defaultMessage='Send code' />
            </Button>
          )}
        </FlowSubmit>
      </Layout>
    </Column>
  )
}

export { RecoveryLink }
