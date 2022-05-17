import { Button }              from '@ilink-ui-proto/button'

import React                   from 'react'
import { FC }                  from 'react'
import { FormattedMessage }    from 'react-intl'

import { Box }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Column }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Text }                from '@ui/text'

import { ProofOfAddressProps } from './proof-of-address.interfaces'
import { stepVar }             from '../store'
import { addressDocumentsVar } from '../store'

const ProofOfAddress: FC<ProofOfAddressProps> = ({ prevStep, nextStep }) => (
  <Box width={['100%', '100%', 736]} backgroundColor='background.white'>
    <Layout flexBasis={40} />
    <Column fill>
      <Layout flexBasis={40} />
      <Layout>
        <Text fontSize='huge' fontWeight='bold'>
          <FormattedMessage id='kyc.proof_your_address' defaultMessage='Proof your address' />
        </Text>
      </Layout>
      <Layout flexBasis={32} />
      <Layout>
        <Text fontSize='semiGiant' fontWeight='bold'>
          <FormattedMessage
            id='kyc.choose_a_document_confirming_address'
            defaultMessage='Choose a document confirming address'
          />
        </Text>
      </Layout>
      <Layout flexBasis={36} />
      <Layout alignItems='center'>
        <Text>Document:</Text>
        <Layout flexBasis={8} />
        <input
          type='file'
          onChange={({ target }) => addressDocumentsVar(target.files || undefined)}
        />
      </Layout>
      <Layout flexBasis={40} flexGrow={1} />
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

export { ProofOfAddress }
