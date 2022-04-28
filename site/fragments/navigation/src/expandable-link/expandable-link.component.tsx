import React                   from 'react'
import { FC }                  from 'react'

import { ArrowDownIcon }       from '@ui/icons'
import { Layout }              from '@ui/layout'
import { NextLink }            from '@ui/link'

import { ExpandableLinkProps } from './expandable-link.interfaces'

const ExpandableLink: FC<ExpandableLinkProps> = ({ content }) => (
  <NextLink keep fontSize='semiRegular' color='text.secondary' fontWeight='bold' path='/'>
    <Layout alignItems='center'>
      <Layout>{content}</Layout>
      <Layout flexShrink={0} flexBasis={4} />
      <Layout width={8} height={4}>
        <ArrowDownIcon width={8} height={4} />
      </Layout>
    </Layout>
  </NextLink>
)

export { ExpandableLink }
