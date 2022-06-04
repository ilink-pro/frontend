import { gql } from '@apollo/client'

export const VERIFY_APPLICANT = gql`
  mutation VerifyApplicant($input: VerifyApplicantInput) {
    verifyApplicant(input: $input) {
      id
    }
  }
`
