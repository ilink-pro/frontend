import { gql } from '@apollo/client'

export const GET_ACCESS_TOKEN = gql`
  query GetAccessToken($input: GetAccessTokenInput) {
    getAccessToken(input: $input) {
      accessToken
    }
  }
`
