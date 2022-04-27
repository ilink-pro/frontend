import { FC }         from 'react'

import { HoverProps } from './hover.interfaces'
import { useHover }   from '../../hooks'

const Hover: FC<HoverProps> = ({ children, ...props }) => {
  const [hover, hoverProps] = useHover({ ...props })

  return typeof children === 'function' ? children(hover, hoverProps) : children
}

export { Hover }
