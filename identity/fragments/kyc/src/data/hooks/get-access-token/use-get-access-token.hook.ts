import { useQuery }         from '@apollo/client'

import { GET_ACCESS_TOKEN } from './get-access-token.query'

export const useGetAccessToken = (id: string) => {
  const { data, loading } = useQuery(GET_ACCESS_TOKEN, { variables: { input: { id } } })

  return [data?.getAccessToken?.accessToken || '', loading]
}
