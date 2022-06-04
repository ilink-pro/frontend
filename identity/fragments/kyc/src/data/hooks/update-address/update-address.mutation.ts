import { gql } from '@apollo/client'

export const UPDATE_ADDRESS = gql`
  mutation UpdateAddress($input: UpdateAddressInput) {
    updateAddress(input: $input) {
      id
    }
  }
`
