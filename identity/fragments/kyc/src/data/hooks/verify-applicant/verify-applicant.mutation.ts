import { gql } from '@apollo/client'

export const VERIFY_APPLICANT = gql`
  mutation VerifyApplicant($id: String!) {
    verifyApplicant(input: { id: $id }) {
      id
    }
  }
`
