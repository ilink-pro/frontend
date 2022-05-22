import { gql } from '@apollo/client'

export const ADD_ID_DOCUMENT = gql`
  mutation AddIdDocument($id: String!, $type: DocumentType, $frontSide: Byte, $backSide: Byte) {
    addIdDocument(input: { id: $id, type: $type, frontSide: $frontSide, backSide: $backSide }) {
      success
    }
  }
`
