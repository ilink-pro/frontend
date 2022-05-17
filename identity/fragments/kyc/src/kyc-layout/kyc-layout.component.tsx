import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

const KYCLayout: FC = ({ children }) => (
  <Box
    fill
    backgroundColor={['background.lightPurple', 'background.lightPurple', 'background.white']}
  >
    <Layout flexBasis={[0, 0, 160]} />
    <Column fill>
      <Layout flexBasis={40} />
      <Layout>
        <Layout flexBasis={[19, 19, 0]} />
        <Text fontSize='big' fontWeight='medium' lineHeight='48px'>
          <FormattedMessage id='kyc.kyc' defaultMessage='KYC' />
        </Text>
      </Layout>
      <Layout flexBasis={[24, 24, 40]} />
      {children}
      <Layout flexBasis={[0, 0, 128]} />
    </Column>
    <Layout flexBasis={[0, 0, 160]} />
  </Box>
)

export { KYCLayout }
