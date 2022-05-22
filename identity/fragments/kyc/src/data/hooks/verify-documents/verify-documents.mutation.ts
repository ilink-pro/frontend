import { gql } from '@apollo/client'

export const VERIFY_DOCUMENTS = gql`
  enum DocumentType {
    PASSPORT
    ID_CARD
    RESIDENCE_PERMIT
  }

  input Document {
    type: DocumentType
    frontSide: Byte
    backSide: Byte
  }

  mutation VerifyDocuments($applicantId: String, $document: Document) {
    verifyDocuments(input: { applicantId: $applicantId, document: $document }) {
      success
      error
    }
  }
`
