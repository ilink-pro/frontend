import { styleFn } from 'styled-system'

export const baseContainerStyles: styleFn = ({ isOpen }) => ({
  transform: `rotate(${isOpen ? 180 : 0}deg)`,
  transition: '.3s',
  alignItems: 'center',
  height: 4,
  width: 8,
})
