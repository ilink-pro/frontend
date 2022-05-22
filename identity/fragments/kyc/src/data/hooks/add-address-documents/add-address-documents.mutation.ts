import { gql } from '@apollo/client'

export const ADD_ADDRESS_DOCUMENTS = gql`
  type AddressDocument {
    file: Byte
  }

  mutation AddAddressesDocument($id: String!, $addressDocuments: [AddressDocument]) {
    addAddressDocuments(input: { id: $id, addressDocuments: $addressDocuments }) {
      success
    }
  }
`
