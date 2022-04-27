import { styleFn } from 'styled-system'

export const baseItemStyles: styleFn = ({ theme, highlighted }) => ({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  cursor: 'pointer',
  hyphens: 'auto',
  alignItems: 'center',
  background: highlighted
    ? theme.colors.select.item.hover.background
    : theme.colors.select.item.default.background,
})
