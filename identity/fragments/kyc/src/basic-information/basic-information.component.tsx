import { Button }                  from '@ilink-ui-proto/button'
import { Input }                   from '@ilink-ui-proto/input'
import { useReactiveVar }          from '@apollo/client'

import Cookie                      from 'js-cookie'
import React                       from 'react'
import { FC }                      from 'react'
import { FormattedMessage }        from 'react-intl'
import { useEffect }               from 'react'
import { useState }                from 'react'
import { useIntl }                 from 'react-intl'

import { Column }                  from '@ui/layout'
import { Box }                     from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { Row }                     from '@ui/layout'
import { Text }                    from '@ui/text'

import { FirstName }               from '../store'
import { MiddleName }              from '../store'
import { LastName }                from '../store'
import { DateOfBirth }             from '../store'
import { Nationality }             from '../store'
import { CountryOfBirth }          from '../store'
import { CountryOfResidence }      from '../store'
import { AccountWillBeUsedFor }    from '../store'
import { ReasonsForOpening }       from '../store'
import { BasicInformationProps }   from './basic-information.interfaces'
import { useCreateApplicant }      from '../data'
import { useUpdateApplicant }      from '../data'
import { useGetApplicant }         from '../data'
import { stepVar }                 from '../store'
import { firstNameVar }            from '../store'
import { middleNameVar }           from '../store'
import { lastNameVar }             from '../store'
import { dateOfBirthVar }          from '../store'
import { nationalityVar }          from '../store'
import { countryOfBirthVar }       from '../store'
import { countryOfResidenceVar }   from '../store'
import { reasonsForOpeningVar }    from '../store'
import { accountWillBeUsedForVar } from '../store'

// eslint-disable-next-line
const useAction = (isExist: boolean) => (isExist ? useUpdateApplicant() : useCreateApplicant())

const BasicInformation: FC<BasicInformationProps> = ({ nextStep }) => {
  const { formatMessage } = useIntl()
  const [applicant] = useGetApplicant(Cookie.get('applicantId') || '')
  const [isExist, setIsExist] = useState<boolean>(false)
  const [update, , loading] = useAction(isExist)

  const firstName = useReactiveVar<FirstName>(firstNameVar)
  const lastName = useReactiveVar<LastName>(lastNameVar)
  const middleName = useReactiveVar<MiddleName>(middleNameVar)
  const dateOfBirth = useReactiveVar<DateOfBirth>(dateOfBirthVar)
  const nationality = useReactiveVar<Nationality>(nationalityVar)
  const countryOfBirth = useReactiveVar<CountryOfBirth>(countryOfBirthVar)
  const countryOfResidence = useReactiveVar<CountryOfResidence>(countryOfResidenceVar)
  const reasonsForOpening = useReactiveVar<ReasonsForOpening>(reasonsForOpeningVar)
  const accountWillBeUsedFor = useReactiveVar<AccountWillBeUsedFor>(accountWillBeUsedForVar)

  useEffect(() => {
    if (applicant) {
      if (!isExist) setIsExist(true)

      firstNameVar(applicant.firstName)
      lastNameVar(applicant.lastName)
      middleNameVar(applicant.middleName)
      dateOfBirthVar(applicant.dateOfBirth)
      nationalityVar(applicant.nationality)
      countryOfBirthVar(applicant.countryOfBirth)
      countryOfResidenceVar(applicant.countryOfResidence)
      reasonsForOpeningVar(applicant.reasonsForOpeningAnAccount)
      accountWillBeUsedForVar(applicant.accountWillBeUsedFor)
    }
  }, [applicant, isExist])

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
              value={firstName}
              onChange={firstNameVar}
              placeholder={formatMessage({
                id: 'kyc.first_name',
                defaultMessage: 'First name',
              })}
            />
          </Layout>
          <Layout flexBasis={32} />
          <Layout width={312} height={56}>
            <Input
              value={lastName}
              onChange={lastNameVar}
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
              value={middleName}
              onChange={middleNameVar}
              placeholder={formatMessage({
                id: 'kyc.middle_name',
                defaultMessage: 'Middle name',
              })}
            />
          </Layout>
          <Layout flexBasis={32} />
          <Layout width={312} height={56}>
            <Input
              value={dateOfBirth}
              onChange={dateOfBirthVar}
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
              value={nationality}
              onChange={nationalityVar}
              placeholder={formatMessage({
                id: 'kyc.nationality',
                defaultMessage: 'Nationality',
              })}
            />
          </Layout>
          <Layout flexBasis={32} />
          <Layout width={312} height={56}>
            <Input
              value={countryOfBirth}
              onChange={countryOfBirthVar}
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
              value={countryOfResidence}
              onChange={countryOfResidenceVar}
              placeholder={formatMessage({
                id: 'kyc.select_your_country_of_residence',
                defaultMessage: 'Select your country of residence',
              })}
            />
          </Layout>
          <Layout flexBasis={32} />
          <Layout width={312} height={56}>
            <Input
              value={reasonsForOpening}
              onChange={reasonsForOpeningVar}
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
              value={accountWillBeUsedFor}
              onChange={accountWillBeUsedForVar}
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
            <Button variant={'secondary' as any} size='large' style={{ width: '100%' }}>
              <FormattedMessage id='kyc.cancel' defaultMessage='Cancel' />
            </Button>
          </Row>
          <Layout flexBasis={[16, 16, 12]} />
          <Row>
            <Button
              disabled={loading}
              size='large'
              style={{ width: '100%' }}
              onClick={() => {
                update({
                  variables: {
                    input: {
                      firstName,
                      lastName,
                      middleName,
                      dateOfBirth,
                      nationality,
                      countryOfBirth,
                      countryOfResidence,
                      reasonsForOpeningAnAccount: reasonsForOpening,
                      accountWillBeUsedFor,
                    },
                  },
                }).then((response) => {
                  if (response?.data?.createApplicant?.id) {
                    Cookie.set('applicantId', response?.data?.createApplicant?.id)
                  }
                  stepVar(nextStep)
                })
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

export { BasicInformation }
