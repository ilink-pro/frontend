import React               from 'react'
import { FC }              from 'react'

import { UserHexagonIcon } from '@ui/icons'
import { ArrowDownIcon }   from '@ui/icons'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Text }            from '@ui/text'

import { useMockedUser }   from '../data'

const User: FC = () => {
  const { user } = useMockedUser()

  return (
    <Box alignItems='center' style={{ cursor: 'pointer' }}>
      <Box width={44} height={44}>
        <UserHexagonIcon width={44} height={44} />
      </Box>
      <Layout flexShrink={0} flexBasis={12} />
      <Layout display={['none', 'none', 'flex']}>
        <Text fontSize='default' fontWeight='bold' lineHeight='unset'>
          {user.name}
        </Text>
      </Layout>
      <Layout flexShrink={0} flexBasis={4} />
      <Box width={8} height={4}>
        <ArrowDownIcon width={8} height={4} />
      </Box>
    </Box>
  )
}

export { User }
