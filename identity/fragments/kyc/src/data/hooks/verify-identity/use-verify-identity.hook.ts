import { useMutation }     from '@apollo/client'

import Cookies             from 'js-cookie'

import { VERIFY_IDENTITY } from './verify-identity.mutation'

export const useVerifyIdentity = () => {
  const [verifyIdentity, { data }] = useMutation(VERIFY_IDENTITY)

  if (data && data.verifyIdentity) {
    Cookies.set('externalUserId', data.verifyIdentity.externalUserId)
  }

  return [verifyIdentity, data?.verifyIdentity?.externalUserId || '']
}
