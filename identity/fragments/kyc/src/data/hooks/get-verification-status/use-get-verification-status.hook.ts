import { useQuery }                from '@apollo/client'

import { VerificationStatus }      from '../../enums'
import { GET_VERIFICATION_STATUS } from './get-verification-status.query'

const convertToVerificationStatus = (string: string): VerificationStatus => {
  if (string === VerificationStatus.PENDING) return VerificationStatus.PENDING
  if (string === VerificationStatus.SUCCESS) return VerificationStatus.SUCCESS
  if (string === VerificationStatus.CANCELLED) return VerificationStatus.CANCELLED

  return VerificationStatus.PENDING
}

export const useGetVerificationStatus = (): [VerificationStatus, boolean] => {
  const { data, loading } = useQuery(GET_VERIFICATION_STATUS)

  return [
    convertToVerificationStatus(data?.getVerificationStatus?.status) || VerificationStatus.PENDING,
    loading,
  ]
}
