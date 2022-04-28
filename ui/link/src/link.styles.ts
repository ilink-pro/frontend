import { styleFn } from 'styled-system'

export const transitionStyles: styleFn = () => ({
  transition: 0.3,
})

export const appearanceLinkStyles: styleFn = ({ theme, keep }) =>
  !keep && {
    color: theme.colors.text.primary,
    '&:hover': {
      color: theme.colors.text.accent,
    },
  }

export const shapeLinkStyles: styleFn = ({ theme }) => ({
  fontSize: theme.fontSizes.semiRegular,
  fontFamily: theme.fonts.primary,
  whiteSpace: 'nowrap',
})

export const activeLinkStyles: styleFn = ({ active, theme }) =>
  active && {
    color: theme.colors.text.accent,
  }
