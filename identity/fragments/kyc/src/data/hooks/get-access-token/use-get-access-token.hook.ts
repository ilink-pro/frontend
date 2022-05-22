import { useQuery }         from '@apollo/client'

import { GET_ACCESS_TOKEN } from './get-access-token.query'

export const useGetAccessToken = () => {
  const { data } = useQuery(GET_ACCESS_TOKEN)

  return data?.getAccessToken?.accessToken || ''
}
