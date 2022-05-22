import { gql } from '@apollo/client'

export const GET_ACCESS_TOKEN = gql`
  query GetAccessToken($applicantId: String!) {
    getAccessToken(input: { applicantId: $applicantId }) {
      accessToken
    }
  }
`
