import styled                  from '@emotion/styled'

import { Box }                 from '@ui/layout'

import { ArrowContainerProps } from './arrow-container.interface'
import { baseContainerStyles } from './arrow-container.styles'

const ArrowContainer = styled(Box)<ArrowContainerProps>(baseContainerStyles)

export { ArrowContainer }
