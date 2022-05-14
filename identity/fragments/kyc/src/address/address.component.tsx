import { Button }           from '@ilink-ui-proto/button'
import { Input }            from '@ilink-ui-proto/input'

import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { AddressProps }     from './address.interfaces'
import { useStep }          from '../store'

const Address: FC<AddressProps> = ({ prevStep, nextStep }) => {
  const { formatMessage } = useIntl()
  const [, setStep] = useStep()

  return (
    <Box width={['100%', '100%', 736]} backgroundColor='background.white'>
      <Layout flexBasis={40} />
      <Column fill>
        <Layout flexBasis={40} />
        <Layout>
          <Text fontSize='huge'>
            <FormattedMessage id='kyc.address' defaultMessage='Address' />
          </Text>
        </Layout>
        <Layout flexBasis={32} />
        <Row height={56}>
          <Input
            placeholder={formatMessage({
              id: 'kyc.city',
              defaultMessage: 'City',
            })}
          />
        </Row>
        <Layout flexBasis={32} />
        <Row height={56}>
          <Input
            placeholder={formatMessage({
              id: 'kyc.street',
              defaultMessage: 'Street',
            })}
          />
        </Row>
        <Layout flexBasis={32} />
        <Layout width='100%' flexDirection={['column', 'column', 'row']}>
          <Layout width={312} height={56}>
            <Input
              placeholder={formatMessage({
                id: 'kyc.apartment_or_house',
                defaultMessage: 'Apartment/House',
              })}
            />
          </Layout>
          <Layout flexBasis={32} />
          <Layout width={312} height={56}>
            <Input
              placeholder={formatMessage({
                id: 'kyc.postal_code',
                defaultMessage: 'Postal code',
              })}
            />
          </Layout>
        </Layout>
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

export { Address }
