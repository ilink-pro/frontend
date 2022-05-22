import { useMutation }      from '@apollo/client'

import { VERIFY_ADDRESSES } from './verify-addresses.mutation'

export const useVerifyAddresses = () => {
  const [verifyAddresses, { data: verifyAddressesResponse }] = useMutation(VERIFY_ADDRESSES)

  return { verifyAddresses, verifyAddressesResponse }
}
