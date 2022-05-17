import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'

import { StepProps } from './step.interfaces'

const Index: FC = ({ children }) => (
  <Box
    width={32}
    height={32}
    backgroundColor='background.purpleAccent'
    justifyContent='center'
    alignItems='center'
    borderRadius='full'
  >
    <Text fontSize='semiRegular' color='text.white' fontWeight='semiBold'>
      {children}
    </Text>
  </Box>
)

const Step: FC<StepProps> = ({ active, index, children }) => (
  <Box width={[32, 32, 'auto']} height={32} opacity={!active ? 0.5 : 1} alignItems='center'>
    <Layout width={32} height={32}>
      <Index>{index}</Index>
    </Layout>
    <Layout flexShrink={0} flexBasis={16} display={['none', 'none', 'flex']} />
    <Layout display={['none', 'none', 'flex']}>
      <Text
        textTransform='uppercase'
        whiteSpace='nowrap'
        fontWeight='semiBold'
        fontSize='semiRegular'
      >
        {children}
      </Text>
    </Layout>
  </Box>
)

export { Step }
