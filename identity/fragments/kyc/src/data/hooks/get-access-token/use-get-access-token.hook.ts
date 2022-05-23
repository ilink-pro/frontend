import { useQuery }         from '@apollo/client'

import { GET_ACCESS_TOKEN } from './get-access-token.query'

export const useGetAccessToken = (id: string) => {
  const { data, loading } = useQuery(GET_ACCESS_TOKEN, { variables: { id } })

  return [data?.getAccessToken?.accessToken || '', loading]
}
