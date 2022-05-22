import { gql } from '@apollo/client'

export const VERIFY_ADDRESSES = gql`
  mutation VerifyAddresses($applicantId: String, $addresses: [Byte]) {
    verifyAddresses(input: { applicantId: $applicantId, addresses: $addresses }) {
      success
      error
    }
  }
`
