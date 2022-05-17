import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'

const Sidebar: FC = ({ children }) => (
  <Box
    width={384}
    height='100%'
    backgroundColor='background.lightPurpleAccent'
    border='soft'
    display={['none', 'none', 'flex']}
  >
    <Layout flexBasis={40} />
    <Column fill>
      <Layout flexBasis={40} />
      {children}
      <Layout flexBasis={40} />
    </Column>
    <Layout flexBasis={40} />
  </Box>
)

export { Sidebar }
