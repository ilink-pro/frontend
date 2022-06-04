import { gql } from '@apollo/client'

export const CREATE_APPLICANT = gql`
  mutation CreateApplicant($input: CreateApplicantInput) {
    createApplicant(input: $input) {
      id
    }
  }
`
