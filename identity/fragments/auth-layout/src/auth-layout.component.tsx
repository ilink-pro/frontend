import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Column }          from '@ui/layout'
import { Text }            from '@ui/text'

import { AuthLayoutProps } from './auth-layout.interfaces'

const AuthLayout: FC<AuthLayoutProps> = ({ title, description, children }) => (
  <Box fill backgroundColor='background.lightPurple'>
    <Layout flexBasis={[0, 0, 160]} />
    <Column>
      <Layout flexBasis={[0, 0, 64]} />
      <Box
        width={['100%', '100%', 672]}
        height={['100%', '100%', 'auto']}
        borderRadius='semiMedium'
        boxShadow='light'
        backgroundColor='background.white'
      >
        <Layout flexBasis={[16, 16, 40]} />
        <Layout width={[343, 343, 504]}>
          <Column fill>
            <Layout flexBasis={[48, 48, 40]} />
            <Layout>
              <Text fontSize={['semiBig', 'semiBig', 'big']} fontWeight='bold'>
                {title}
              </Text>
            </Layout>
            <Layout flexBasis={[16, 16, 12]} />
            <Layout>
              <Text fontSize='default' color='text.gray'>
                {description}
              </Text>
            </Layout>
            <Layout flexBasis={[48, 48, 32]} />
            <Layout fill>{children}</Layout>
          </Column>
        </Layout>
        <Layout flexBasis={[16, 16, 128]} />
      </Box>
      <Layout flexBasis={[0, 0, 128]} />
    </Column>
  </Box>
)

export { AuthLayout }
