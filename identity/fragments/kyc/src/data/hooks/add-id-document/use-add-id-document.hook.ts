import { useMutation }     from '@apollo/client'

import { ADD_ID_DOCUMENT } from './add-id-document.mutation'

export const useAddIdDocument = () => {
  const [addIdDocument, { data, loading }] = useMutation(ADD_ID_DOCUMENT)

  return [addIdDocument, data, loading]
}
