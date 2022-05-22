import { useMutation }    from '@apollo/client'

import { UPDATE_ADDRESS } from './update-address.mutation'

export const useUpdateAddress = () => {
  const [updateAddress, { data, loading }] = useMutation(UPDATE_ADDRESS)

  return [updateAddress, data, loading]
}
