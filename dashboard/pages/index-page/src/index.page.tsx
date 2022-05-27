import React          from 'react'

import { Navigation } from '@dashboard/navigation-fragment'
import { Column }     from '@ui/layout'

import { Seo }        from './seo.component'

export const IndexPage = () => (
  <Column fill>
    <Seo />
    <Navigation />
  </Column>
)
