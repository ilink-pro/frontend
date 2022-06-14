import { gql } from '@apollo/client'

export const GET_APPLICANT = gql`
  query GetApplicant($input: GetApplicantInput) {
    getApplicant(input: $input) {
      applicant {
        id
        firstName
        lastName
        middleName
        dateOfBirth
        nationality
        countryOfBirth
        countryOfResidence
        reasonsForOpeningAnAccount
        accountWillBeUsedFor
        city
        street
        apartmentOrHouse
        postalCode
      }
    }
  }
`
