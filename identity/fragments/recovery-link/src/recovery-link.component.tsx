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

const RecoveryLink: FC = () => (
  <Column fill>
    <Row height={80}>
      <FlowNode name='email'>
        {({ attributes }, value, onChange) => (
          <Row height={56}>
            <Input value={value} onChange={onChange} placeholder='Your email' {...attributes} />
          </Row>
        )}
      </FlowNode>
      <Layout flexBasis={12} />
      <FlowNodeMessages>{(messages) => <FieldMessages messages={messages} />}</FlowNodeMessages>
    </Row>
    <Layout width={['100%', '100%', 240]}>
      <FlowSubmit>
        {({ submitting, onSubmit }) => (
          <Button disabled={submitting} onClick={onSubmit}>
            Send code
          </Button>
        )}
      </FlowSubmit>
    </Layout>
  </Column>
)

export { RecoveryLink }
