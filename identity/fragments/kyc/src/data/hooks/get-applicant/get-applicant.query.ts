import { gql } from '@apollo/client'

export const GET_APPLICANT = gql`
  query GetApplicant($id: String!) {
    getApplicant(input: { query: { id: $id } }) {
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
