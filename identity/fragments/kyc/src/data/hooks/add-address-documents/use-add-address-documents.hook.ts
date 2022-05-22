import { useMutation }           from '@apollo/client'

import { ADD_ADDRESS_DOCUMENTS } from './add-address-documents.mutation'

export const useAddAddressDocuments = () => {
  const [addAddressDocuments, { data, loading }] = useMutation(ADD_ADDRESS_DOCUMENTS)

  return [addAddressDocuments, data, loading]
}
