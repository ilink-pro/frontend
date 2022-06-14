import { gql } from '@apollo/client'

export const UPDATE_APPLICANT = gql`
  mutation UpdateApplicant($input: UpdateApplicantInput) {
    updateApplicant(input: $input) {
      id
    }
  }
`
