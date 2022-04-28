import { createAppearanceStyles } from '@ilink-ui-parts/button'

import { ifProp }                 from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

const appearanceSecondaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.default.font'),
  backgroundColor: prop('theme.colors.button.secondary.default.background'),
  borderColor: prop('theme.colors.button.secondary.default.border'),
})

const appearanceSecondaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.hover.font'),
  backgroundColor: prop('theme.colors.button.secondary.hover.background'),
  borderColor: prop('theme.colors.button.secondary.hover.border'),
})

const appearanceSecondaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.pressed.font'),
  backgroundColor: prop('theme.colors.button.secondary.pressed.background'),
  borderColor: prop('theme.colors.button.secondary.pressed.border'),
})

const appearanceSecondaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.disabled.font'),
  backgroundColor: prop('theme.colors.button.secondary.disabled.background'),
  borderColor: prop('theme.colors.button.secondary.disabled.border'),
})

const appearanceStyles = switchProp(prop('variant', 'primary'), {
  secondary: ifProp(
    prop('disabled', false),
    appearanceSecondaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceSecondaryPressedStyles,
      ifProp(prop('hover', false), appearanceSecondaryHoverStyles, appearanceSecondaryDefaultStyles)
    )
  ),
})

export { appearanceStyles }
