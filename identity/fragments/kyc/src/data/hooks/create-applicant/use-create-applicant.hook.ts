import { useMutation }      from '@apollo/client'

import { CREATE_APPLICANT } from './create-applicant.mutation'

export const useCreateApplicant = () => {
  const [createApplicant, { data, loading }] = useMutation(CREATE_APPLICANT)

  return [createApplicant, data, loading]
}
