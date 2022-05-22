import { gql } from '@apollo/client'

export const VERIFY_IDENTITY = gql`
  mutation VerifyIdentity(
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
    verifyIdentity(
      input: {
        identity: {
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
      }
    ) {
      success
      error
      externalUserId
    }
  }
`
