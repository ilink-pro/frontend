import { Button }                   from '@ilink-ui-proto/button'

import Cookie                       from 'js-cookie'
import React                        from 'react'
import { FC }                       from 'react'
import { FormattedMessage }         from 'react-intl'

import { Condition }                from '@ui/condition'
import { Box }                      from '@ui/layout'
import { Column }                   from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { NextLink }                 from '@ui/link'
import { Text }                     from '@ui/text'

import { VerificationStatus }       from '../data'
import { useGetVerificationStatus } from '../data'

const DataVerification: FC = () => {
  const [status, loading] = useGetVerificationStatus(Cookie.get('applicantId') || '')

  return (
    <Box width={['100%', '100%', 736]} backgroundColor='background.white'>
      <Layout flexBasis={40} />
      <Column fill>
        <Layout flexBasis={40} />
        <Layout>
          <Text fontSize='huge' fontWeight='bold'>
            <FormattedMessage id='kyc.data_verification' defaultMessage='Data verification' />
          </Text>
        </Layout>
        <Layout flexBasis={32} />
        <Layout>
          <Condition match={loading}>
            <Text fontSize='semiGiant' fontWeight='bold'>
              <FormattedMessage id='kyc.loading' defaultMessage='Loading...' />
            </Text>
          </Condition>
          <Condition match={!loading}>
            <Condition match={status === VerificationStatus.PENDING}>
              <Text fontSize='semiGiant' fontWeight='bold'>
                <FormattedMessage
                  id='kyc.account_verification_in_progress'
                  defaultMessage='Account verification in progress'
                />
              </Text>
            </Condition>
            <Condition match={status === VerificationStatus.CANCELLED}>
              <Text fontSize='semiGiant' fontWeight='bold'>
                <FormattedMessage
                  id='kyc.unable_to_complete_account_verification'
                  defaultMessage='Unable to complete account verification'
                />
              </Text>
            </Condition>
            <Condition match={status === VerificationStatus.SUCCESS}>
              <Text fontSize='semiGiant' fontWeight='bold'>
                <FormattedMessage
                  id='kyc.verification_passed_successfully'
                  defaultMessage='Verification passed successfully'
                />
              </Text>
            </Condition>
          </Condition>
        </Layout>
        <Layout flexBasis={40} flexGrow={1} />
        <Layout width={['100%', '100%', 205]}>
          <NextLink path='/'>
            <Button size='large'>
              <FormattedMessage id='kyc.go_to_banxe_digital' defaultMessage='Go to Banxe Digital' />
            </Button>
          </NextLink>
        </Layout>
        <Layout flexBasis={40} />
      </Column>
      <Layout flexBasis={40} />
    </Box>
  )
}
export { DataVerification }
