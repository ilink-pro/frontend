/**
 * @jest-environment jsdom
 */

import { MockedProvider }          from '@apollo/react-testing'
import { render }                  from '@testing-library/react'

import React                       from 'react'
import { IntlProvider }            from 'react-intl'

import { ThemeProvider }           from '@ui/theme'

import { VerificationStatus }      from '../data'
import { CREATE_APPLICANT }        from '../data'
import { GET_ACCESS_TOKEN }        from '../data'
import { GET_APPLICANT }           from '../data'
import { GET_VERIFICATION_STATUS } from '../data'
import { UPDATE_ADDRESS }          from '../data'
import { VERIFY_APPLICANT }        from '../data'
import { KYC }                     from '../kyc.component'

const mocks = [
  {
    request: { query: CREATE_APPLICANT },
    result: {
      data: {
        createApplicant: {
          id: 'id',
        },
      },
    },
  },
  {
    request: { query: GET_ACCESS_TOKEN },
    result: {
      data: {
        getAccessToken: {
          accessToken: 'accessToken',
        },
      },
    },
  },
  {
    request: { query: GET_APPLICANT },
    result: {
      data: {
        getApplicant: {
          applicant: {
            id: 'id',
            firstName: 'firstName',
            lastName: 'lastName',
            middleName: 'middleName',
            dateOfBirth: 'dateOfBirth',
            nationality: 'nationality',
            countryOfBirth: 'countryOfBirth',
            countryOfResidence: 'countryOfResidence',
            reasonsForOpeningAnAccount: 'reasonsForOpeningAnAccount',
            accountWillBeUsedFor: 'accountWillBeUsedFor',
            city: 'city',
            street: 'street',
            apartmentOrHouse: 'apartmentOrHouse',
            postalCode: 'postalCode',
          },
        },
      },
    },
  },
  {
    request: { query: GET_VERIFICATION_STATUS },
    result: {
      data: {
        getVerificationStatus: {
          status: VerificationStatus.PENDING,
        },
      },
    },
  },
  {
    request: { query: UPDATE_ADDRESS },
    result: {
      data: {
        updateAddress: {
          id: 'id',
        },
      },
    },
  },
  {
    request: { query: VERIFY_APPLICANT },
    result: {
      data: {
        verifyApplicant: {
          id: 'id',
        },
      },
    },
  },
]

describe('identity', () => {
  describe('kyc', () => {
    describe('kyc.component', () => {
      it('should match the latest render snapshot', () => {
        const { asFragment } = render(
          <MockedProvider mocks={mocks} addTypename={false}>
            <IntlProvider locale='ru' messages={{}}>
              <ThemeProvider>
                <KYC />
              </ThemeProvider>
            </IntlProvider>
          </MockedProvider>
        )

        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
