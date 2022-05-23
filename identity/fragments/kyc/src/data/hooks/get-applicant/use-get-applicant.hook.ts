import { useQuery }      from '@apollo/client'

import { GET_APPLICANT } from './get-applicant.query'

export const useGetApplicant = (id: string) => {
  const { data, loading } = useQuery(GET_APPLICANT, { variables: { id } })

  return [data?.getApplicant?.applicant, loading]
}
