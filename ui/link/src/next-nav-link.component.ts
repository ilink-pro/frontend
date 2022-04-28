import { createNextNavLink } from '@ilink-ui-parts/link'

import { FC }                from 'react'

import { Link }              from './link.component'
import { LinkProps }         from './link.interfaces'

// @ts-ignore
const NextNavLink: FC<LinkProps> = createNextNavLink(Link)

export { NextNavLink }
