import { gql } from '@apollo/client'

export const GET_VERIFICATION_STATUS = gql`
  query GetVerificationStatus($input: GetVerificationStatusInput) {
    getVerificationStatus(input: $input) {
      status
    }
  }
`
