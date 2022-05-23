import { gql } from '@apollo/client'

export const UPDATE_ADDRESS = gql`
  mutation UpdateAddress(
    $id: String!
    $city: String!
    $apartmentOrHouse: String!
    $postalCode: String!
  ) {
    updateAddress(
      input: { id: $id, city: $city, apartmentOrHouse: $apartmentOrHouse, postalCode: $postalCode }
    ) {
      id
    }
  }
`
