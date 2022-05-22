import { useMutation }      from '@apollo/client'

import { VERIFY_APPLICANT } from './verify-applicant.mutation'

export const useVerifyApplicant = () => {
  const [verifyApplicant, { data, loading }] = useMutation(VERIFY_APPLICANT)

  return [verifyApplicant, data, loading]
}
