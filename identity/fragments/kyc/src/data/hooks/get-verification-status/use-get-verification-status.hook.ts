import { useQuery }                from '@apollo/client'

import { VerificationStatus }      from '../../enums'
import { GET_VERIFICATION_STATUS } from './get-verification-status.query'

export const useGetVerificationStatus = (id: string): [VerificationStatus, boolean] => {
  const { data, loading } = useQuery(GET_VERIFICATION_STATUS, { variables: { input: { id } } })

  return [data?.getVerificationStatus?.status || VerificationStatus.PENDING, loading]
}
