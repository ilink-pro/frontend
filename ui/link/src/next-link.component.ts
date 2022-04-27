import { createNextLink } from '@ilink-ui-parts/link'

import { FC }             from 'react'

import { Link }           from './link.component'
import { LinkProps }      from './link.interfaces'

// @ts-ignore
const NextLink: FC<LinkProps> = createNextLink(Link)

export { NextLink }
