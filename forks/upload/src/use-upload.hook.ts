import { ApolloClient }  from '@apollo/client'
import { InMemoryCache } from '@apollo/client'
import { gql }           from '@apollo/client'

import { useMemo }       from 'react'

import { useGatewayUrl } from './use-gateway-url.hook'

const uploadMutation = gql`
  mutation CreateUpload($input: CreateUploadInput!) {
    createUpload(input: $input) {
      id
      url
    }
  }
`
const confirmMutation = gql`
  mutation ConfirmUpload($input: ConfirmUploadInput!) {
    confirmUpload(input: $input) {
      id
      url
    }
  }
`

const upload = async (url: string, file: File) => {
  try {
    await fetch(url, {
      method: 'POST',
      body: file,
      headers: {
        'Content-Type': file.type,
        'Access-Control-Allow-Origin': '*',
      },
    })
    // eslint-disable-next-line no-empty
  } catch {}
}

export interface UseUploadProps {
  bucket: string
  endpoint?: string
}

export const useUpload = ({ bucket, endpoint: defaultEndpoint }: UseUploadProps) => {
  const endpoint = useGatewayUrl(defaultEndpoint)

  // eslint-disable-next-line consistent-return
  const client = useMemo(() => {
    if (endpoint)
      return new ApolloClient({
        uri: endpoint,
        cache: new InMemoryCache(),
      })
  }, [endpoint]) as ApolloClient<any>

  return async (file: File) => {
    const { data } = await client.mutate({
      mutation: uploadMutation,
      variables: {
        input: {
          bucket,
          name: file.name,
          size: file.size,
        },
      },
    })

    const { id, url } = data.createUpload

    await upload(url, file)

    const { data: confirmData } = await client.mutate({
      mutation: confirmMutation,
      variables: {
        input: { id },
      },
    })

    return confirmData.confirmUpload
  }
}
