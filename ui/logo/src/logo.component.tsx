import React              from 'react'
import { FC }             from 'react'

import { Layout }         from '@ui/layout'
import { NextLink }       from '@ui/link'

import { LogoIcon }       from './logo.icon'
import { LogoProps }      from './logo.interfaces'
import { TabletLogoIcon } from './tablet-logo.icon'

const Logo: FC<LogoProps> = ({ width, height }) => (
  <NextLink path='/' keep>
    <Layout display={['flex', 'none', 'flex']}>
      <LogoIcon width={width} height={height} />
    </Layout>
    <Layout display={['none', 'flex', 'none']}>
      <TabletLogoIcon width={width} height={height} />
    </Layout>
  </NextLink>
)

export { Logo }
