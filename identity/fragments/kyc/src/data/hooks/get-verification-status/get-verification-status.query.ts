import { gql } from '@apollo/client'

export const GET_VERIFICATION_STATUS = gql`
  query GetVerificationStatus($applicantId: String!) {
    getVerificationStatus(input: { applicantId: $applicantId }) {
      status
    }
  }
`
