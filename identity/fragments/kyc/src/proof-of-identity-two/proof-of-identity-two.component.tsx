import SumsubWebSdk                from '@sumsub/websdk-react'
import { Button }                  from '@ilink-ui-proto/button'

import Cookie                      from 'js-cookie'
import React                       from 'react'
import { FC }                      from 'react'
import { FormattedMessage }        from 'react-intl'

import { Condition }               from '@ui/condition'
import { Box }                     from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Row }                     from '@ui/layout'
import { Text }                    from '@ui/text'
import { Space }                   from '@ui/text'

import { ProofOfIdentityTwoProps } from './proof-of-identity-two.interfaces'
import { useGetAccessToken }       from '../data'
import { stepVar }                 from '../store'

const ProofOfIdentityTwo: FC<ProofOfIdentityTwoProps> = ({ prevStep, nextStep }) => {
  const [accessToken, loading] = useGetAccessToken(Cookie.get('applicantId') || '')

  return (
    <Box width={['100%', '100%', 736]} backgroundColor='background.white'>
      <Layout flexBasis={40} />
      <Column fill>
        <Layout flexBasis={40} />
        <Layout>
          <Text fontSize='huge' fontWeight='bold'>
            <FormattedMessage id='kyc.proof_your_identity' defaultMessage='Proof your identity' />
            <Space />
            <Text fontSize='semiGiant' fontWeight='bold' color='text.accent'>
              <FormattedMessage id='kyc.step_2' defaultMessage='Step 2' />
            </Text>
          </Text>
        </Layout>
        <Layout flexBasis={32} />
        <Box width={656}>
          <Condition match={!loading}>
            <SumsubWebSdk
              accessToken={accessToken}
              expirationHandler={() =>
                new Promise((resolve) => {
                  resolve('expired')
                })
              }
            />
          </Condition>
        </Box>
        <Layout flexGrow={1} />
        <Layout width={['100%', '100%', 254]} flexDirection={['column', 'column', 'row']}>
          <Row>
            <Button
              variant={'secondary' as any}
              size='large'
              style={{ width: '100%' }}
              onClick={() => stepVar(prevStep)}
            >
              <FormattedMessage id='kyc.back' defaultMessage='Back' />
            </Button>
          </Row>
          <Layout flexBasis={[16, 16, 12]} />
          <Row>
            <Button size='large' style={{ width: '100%' }} onClick={() => stepVar(nextStep)}>
              <FormattedMessage id='kyc.next' defaultMessage='Next' />
            </Button>
          </Row>
        </Layout>
        <Layout flexBasis={40} />
      </Column>
      <Layout flexBasis={40} />
    </Box>
  )
}
export { ProofOfIdentityTwo }
