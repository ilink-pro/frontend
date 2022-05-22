import { useMutation }      from '@apollo/client'

import { VERIFY_DOCUMENTS } from './verify-documents.mutation'

export const useVerifyDocuments = () => {
  const [verifyDocuments, { data: verifyDocumentsResponse }] = useMutation(VERIFY_DOCUMENTS)

  return { verifyDocuments, verifyDocumentsResponse }
}
