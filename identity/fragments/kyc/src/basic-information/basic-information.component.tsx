import { Button }                from '@ilink-ui-proto/button'
import { Input }                 from '@ilink-ui-proto/input'

import React                     from 'react'
import { FC }                    from 'react'
import { FormattedMessage }      from 'react-intl'
import { useIntl }               from 'react-intl'

import { Column }                from '@ui/layout'
import { Box }                   from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Row }                   from '@ui/layout'
import { Text }                  from '@ui/text'

import { BasicInformationProps } from './basic-information.interfaces'
import { useStep }               from '../store'

const BasicInformation: FC<BasicInformationProps> = ({ nextStep }) => {
  const { formatMessage } = useIntl()
  const [, setStep] = useStep()

  return (
    <Box width={['100%', '100%', 736]} backgroundColor='background.white'>
      <Layout flexBasis={40} />
      <Column fill>
        <Layout flexBasis={40} />
        <Layout>
          <Text fontSize='huge'>
            <FormattedMessage id='kyc.basic_information' defaultMessage='Basic information' />
          </Text>
        </Layout>
        <Layout flexBasis={32} />
        <Layout width='100%' flexDirection={['column', 'column', 'row']}>
          <Layout width={312} height={56}>
            <Input
              placeholder={formatMessage({
                id: 'kyc.first_name',
                defaultMessage: 'First name',
              })}
            />
          </Layout>
          <Layout flexBasis={32} />
          <Layout width={312} height={56}>
            <Input
              placeholder={formatMessage({
                id: 'kyc.last_name',
                defaultMessage: 'Last name',
              })}
            />
          </Layout>
        </Layout>
        <Layout flexBasis={32} />
        <Layout width='100%' flexDirection={['column', 'column', 'row']}>
          <Layout width={312} height={56}>
            <Input
              placeholder={formatMessage({
                id: 'kyc.middle_name',
                defaultMessage: 'Middle name',
              })}
            />
          </Layout>
          <Layout flexBasis={32} />
          <Layout width={312} height={56}>
            <Input
              placeholder={formatMessage({
                id: 'kyc.date_of_birth',
                defaultMessage: 'Date of birth',
              })}
            />
          </Layout>
        </Layout>
        <Layout flexBasis={32} />
        <Layout width='100%' flexDirection={['column', 'column', 'row']}>
          <Layout width={312} height={56}>
            <Input
              placeholder={formatMessage({
                id: 'kyc.nationality',
                defaultMessage: 'Nationality',
              })}
            />
          </Layout>
          <Layout flexBasis={32} />
          <Layout width={312} height={56}>
            <Input
              placeholder={formatMessage({
                id: 'kyc.country_of_birth',
                defaultMessage: 'Country of birth',
              })}
            />
          </Layout>
        </Layout>
        <Layout flexBasis={32} />
        <Layout width='100%' flexDirection={['column', 'column', 'row']}>
          <Layout width={312} height={56}>
            <Input
              placeholder={formatMessage({
                id: 'kyc.select_your_country_of_residence',
                defaultMessage: 'Select your country of residence',
              })}
            />
          </Layout>
          <Layout flexBasis={32} />
          <Layout width={312} height={56}>
            <Input
              placeholder={formatMessage({
                id: 'kyc.reasons_for_opening_an_account',
                defaultMessage: 'Reasons for opening an account',
              })}
            />
          </Layout>
        </Layout>
        <Layout flexBasis={32} />
        <Layout width='100%' flexDirection={['column', 'column', 'row']}>
          <Layout width={312} height={56}>
            <Input
              placeholder={formatMessage({
                id: 'kyc.account_will_be_used_for',
                defaultMessage: 'Account will be used for',
              })}
            />
          </Layout>
        </Layout>
        <Layout flexBasis={32} />
        <Layout>
          <Text fontSize='default' fontWeight='medium'>
            <FormattedMessage id='kyc.i_am_not_a_pep' defaultMessage='I am not a PEP' />
          </Text>
        </Layout>
        <Layout flexBasis={[24, 24, 16]} />
        <Layout>
          <Text fontSize='default' fontWeight='medium'>
            <FormattedMessage
              id='kyc.i_am_not_family_members_and_close_associates_of_pep'
              defaultMessage='I am not family members and close associates of the PEP'
            />
          </Text>
        </Layout>
        <Layout flexBasis={40} />
        <Layout width={['100%', '100%', 254]} flexDirection={['column', 'column', 'row']}>
          <Row>
            <Button variant='secondary' size='large' style={{ width: '100%' }}>
              <FormattedMessage id='kyc.cancel' defaultMessage='Cancel' />
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

export { BasicInformation }
