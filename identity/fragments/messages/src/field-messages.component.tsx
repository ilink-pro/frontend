import React                  from 'react'
import { FC }                 from 'react'

import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Text }               from '@ui/text'

import { FieldMessagesProps } from './messages.interfaces'

export const FieldMessages: FC<FieldMessagesProps> = ({ messages = [] }) => (
  <Column>
    {messages.map((message) => (
      <Layout key={message?.text}>
        <Text
          key={message?.id}
          color={message?.type === 'error' ? 'text.red' : 'text.primary'}
          lineHeight='24px'
        >
          {message?.text}
        </Text>
      </Layout>
    ))}
  </Column>
)
