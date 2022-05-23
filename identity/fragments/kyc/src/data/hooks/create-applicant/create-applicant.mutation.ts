import { gql } from '@apollo/client'

export const CREATE_APPLICANT = gql`
  mutation CreateApplicant(
    $firstName: String
    $lastName: String
    $middleName: String
    $dateOfBirth: String
    $nationality: String
    $countryOfBirth: String
    $countryOfResidence: String
    $reasonsForOpeningAnAccount: String
    $accountWillBeUsedFor: String
    $city: String
    $street: String
    $apartmentOrHouse: String
    $postalCode: String
  ) {
    createApplicant(
      input: {
        firstName: $firstName
        lastName: $lastName
        middleName: $middleName
        dateOfBirth: $dateOfBirth
        nationality: $nationality
        countryOfBirth: $countryOfBirth
        countryOfResidence: $countryOfResidence
        reasonsForOpeningAnAccount: $reasonsForOpeningAnAccount
        accountWillBeUsedFor: $accountWillBeUsedFor
        city: $city
        street: $street
        apartmentOrHouse: $apartmentOrHouse
        postalCode: $postalCode
      }
    ) {
      id
    }
  }
`
