import { useMutation }     from '@apollo/client'

import { VERIFY_IDENTITY } from './verify-identity.mutation'

export const useVerifyIdentity = () => {
  const [verifyIdentity, { data: verifyIdentityResponse }] = useMutation(VERIFY_IDENTITY)

  return { verifyIdentity, verifyIdentityResponse }
}
