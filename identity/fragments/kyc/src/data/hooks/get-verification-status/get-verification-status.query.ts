import { gql } from '@apollo/client'

export const GET_VERIFICATION_STATUS = gql`
  query GetVerificationStatus($id: String!) {
    getVerificationStatus(input: { id: $id }) {
      status
    }
  }
`
