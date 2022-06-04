import { Button }              from '@ilink-ui-proto/button'
import { Input }               from '@ilink-ui-proto/input'
import { useReactiveVar }      from '@apollo/client'

import Cookie                  from 'js-cookie'
import React                   from 'react'
import { FC }                  from 'react'
import { FormattedMessage }    from 'react-intl'
import { useEffect }           from 'react'
import { useIntl }             from 'react-intl'

import { Box }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Column }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Text }                from '@ui/text'

import { City }                from '../store'
import { Street }              from '../store'
import { ApartmentOrHouse }    from '../store'
import { PostalCode }          from '../store'
import { AddressProps }        from './address.interfaces'
import { useUpdateAddress }    from '../data'
import { useGetApplicant }     from '../data'
import { stepVar }             from '../store'
import { cityVar }             from '../store'
import { streetVar }           from '../store'
import { apartmentOrHouseVar } from '../store'
import { postalCodeVar }       from '../store'

const Address: FC<AddressProps> = ({ prevStep, nextStep }) => {
  const { formatMessage } = useIntl()
  const [updateAddress, , loading] = useUpdateAddress()
  const [applicant] = useGetApplicant(Cookie.get('applicantId') || '')

  const city = useReactiveVar<City>(cityVar)
  const street = useReactiveVar<Street>(streetVar)
  const apartmentOrHouse = useReactiveVar<ApartmentOrHouse>(apartmentOrHouseVar)
  const postalCode = useReactiveVar<PostalCode>(postalCodeVar)

  useEffect(() => {
    if (applicant) {
      cityVar(applicant.city)
      streetVar(applicant.street)
      apartmentOrHouseVar(applicant.apartmentOrHouse)
      postalCodeVar(applicant.postalCode)
    }
  }, [applicant])

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
            value={city}
            onChange={cityVar}
            placeholder={formatMessage({
              id: 'kyc.city',
              defaultMessage: 'City',
            })}
          />
        </Row>
        <Layout flexBasis={32} />
        <Row height={56}>
          <Input
            value={street}
            onChange={streetVar}
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
              value={apartmentOrHouse}
              onChange={apartmentOrHouseVar}
              placeholder={formatMessage({
                id: 'kyc.apartment_or_house',
                defaultMessage: 'Apartment/House',
              })}
            />
          </Layout>
          <Layout flexBasis={32} />
          <Layout width={312} height={56}>
            <Input
              value={postalCode}
              onChange={postalCodeVar}
              placeholder={formatMessage({
                id: 'kyc.postal_code',
                defaultMessage: 'Postal code',
              })}
            />
          </Layout>
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
            <Button
              disabled={loading}
              size='large'
              style={{ width: '100%' }}
              onClick={() => {
                updateAddress({
                  variables: {
                    input: {
                      id: Cookie.get('applicantId'),
                      city,
                      apartmentOrHouse,
                      postalCode,
                    },
                  },
                }).then(() => stepVar(nextStep))
              }}
            >
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
