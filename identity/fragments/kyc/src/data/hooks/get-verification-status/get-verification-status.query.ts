import { gql } from '@apollo/client'

export const GET_VERIFICATION_STATUS = gql`
  query GetVerificationStatus($externalUserId: String!) {
    getVerificationStatus(input: { externalUserId: $externalUserId }) {
      status
    }
  }
`
