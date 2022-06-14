import { useMutation }      from '@apollo/client'

import Cookie               from 'js-cookie'

import { UPDATE_APPLICANT } from './update-applicant.mutation'

export const useUpdateApplicant = () => {
  const [mutate, { data, loading }] = useMutation(UPDATE_APPLICANT)

  const updateApplicant = (payload) =>
    mutate({
      ...payload,
      variables: {
        ...payload.variables,
        input: {
          id: Cookie.get('applicantId'),
          ...payload.variables.input,
        },
      },
    })

  return [updateApplicant, data, loading]
}
