import SumsubWebSdk              from '@sumsub/websdk-react'
import { Button }                from '@ilink-ui-proto/button'

import React                     from 'react'
import axios                     from 'axios'
import { FC }                    from 'react'
import { FormattedMessage }      from 'react-intl'
import { createHmac }            from 'crypto'
import { useQuery }              from 'react-query'

import { Condition }             from '@ui/condition'
import { Box }                   from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Column }                from '@ui/layout'
import { Row }                   from '@ui/layout'
import { Text }                  from '@ui/text'
import { Space }                 from '@ui/text'

import { ProofOfIdentity2Props } from './proof-of-identity-2.interfaces'
import { useStep }               from '../store'

const ProofOfIdentityTwo: FC<ProofOfIdentity2Props> = ({ prevStep, nextStep }) => {
  const [, setStep] = useStep()
  const { data, isLoading, error } = useQuery('accessToken', () =>
    axios.post(
      'https://api.sumsub.com/resources/accessTokens?userId=testuser&levelName=basic-kyc-level&ttlInSecs=600',
      undefined,
      {
        headers: {
          Accept: 'application/json',
          'Access-Control-Request-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'X-App-Token': 'sbx:jFFwUJSww6c71DG4tLIXhMfq.Es5wsd0OIji8E72HyKA6L6OdOSGu9pQ2',
          'X-App-Access-Sig': createHmac('sha256', 'Q9qdgQSKJHH6cib0PNdypKTU6c1yVtLr').digest(
            'hex'
          ),
          'X-App-Access-Ts': Math.floor(Date.now() / 1000),
        },
      }
    ))

  if (data) {
    console.log(data)
  }

  if (error) {
    throw new Error(error)
  }

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
          <Condition match={!isLoading && !error}>
            <SumsubWebSdk accessToken={data?.data.token || ''} expirationHandler={() => {}} />
          </Condition>
        </Box>
        <Layout flexGrow={1} />
        <Layout width={['100%', '100%', 254]} flexDirection={['column', 'column', 'row']}>
          <Row>
            <Button
              variant='secondary'
              size='large'
              style={{ width: '100%' }}
              onClick={() => setStep(prevStep)}
            >
              <FormattedMessage id='kyc.back' defaultMessage='Back' />
            </Button>
          </Row>
          <Layout flexBasis={[16, 16, 12]} />
          <Row>
            <Button size='large' style={{ width: '100%' }} onClick={() => setStep(nextStep)}>
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
