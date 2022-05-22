import { gql } from '@apollo/client'

export const GET_ACCESS_TOKEN = gql`
  query GetAccessToken($id: String!) {
    getAccessToken(input: { id: $id }) {
      accessToken
    }
  }
`
