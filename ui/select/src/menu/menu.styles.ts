import { styleFn } from 'styled-system'

export const baseMenuStyles: styleFn = ({ triggerBounds }) => ({
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  listStyleType: 'none',
  outline: 'none',
  overflow: 'hidden',
  padding: 0,
  marginTop: 8,
  zIndex: 1000,
  width: triggerBounds ? triggerBounds.width : 'auto',
})

export const shapeMenuStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.normal,
  fontFamily: theme.fonts.primary,
})

export const appearanceMenuStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.background.white,
  border: `1px solid ${theme.colors.select.menu.border}`,
})
