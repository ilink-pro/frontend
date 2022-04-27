import { createBaseStyles }    from '@ilink-ui-parts/button'
import { createShapeStyles }   from '@ilink-ui-parts/button'
import { createContentStyles } from '@ilink-ui-parts/button'

import { styleFn }             from 'styled-system'
import { prop }                from 'styled-tools'
import { switchProp }          from 'styled-tools'
import { ifProp }              from 'styled-tools'

export const fillStyles: styleFn = ifProp(prop('fill', false), { width: '100%' })

const shapeNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: prop('theme.fontWeights.normal'),
  size: 56,
  fontSize: prop('theme.fontSizes.semiRegular'),
  rounding: prop('theme.radii.normal') as unknown as number,
  paddingLeft: '0px' as any,
  paddingRight: '0px' as any,
})

const shapeGhostStyles = createShapeStyles({
  size: 'auto' as any,
  paddingLeft: 0,
  paddingRight: 0,
})

export const baseStyles = createBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  normal: shapeNormalSizeStyles,
  ghost: shapeGhostStyles,
})
