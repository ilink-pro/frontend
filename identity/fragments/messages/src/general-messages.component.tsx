import React                    from 'react'
import { FC }                   from 'react'

import { Layout }               from '@ui/layout'
import { Column }               from '@ui/layout'
import { Text }                 from '@ui/text'

import { GeneralMessagesProps } from './messages.interfaces'

export const GeneralMessages: FC<GeneralMessagesProps> = ({ messages = [] }) => (
  <Column justifyContent='center' alignItems='center'>
    {messages.map((message) => (
      <Layout maxWidth={320} width='100%' justifyContent='center' key={message?.id}>
        <Text
          color={message?.type === 'error' ? 'text.red' : 'text.primary'}
          fontSize={14}
          lineHeight='24px'
          textAlign='center'
        >
          {message?.text}
        </Text>
      </Layout>
    ))}
    <Layout flexBasis={24} />
  </Column>
)
