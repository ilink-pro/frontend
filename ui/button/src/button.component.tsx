import styled               from '@emotion/styled'
import { Content }          from '@ilink-ui-parts/button'

import React                from 'react'
import { FC }               from 'react'
import { forwardRef }       from 'react'
import { useState }         from 'react'

import { useHover }         from '@ui/utils'

import { ButtonProps }      from './button.interfaces'
import { appearanceStyles } from './button.appearance-styles'
import { baseStyles }       from './button.styles'
import { shapeStyles }      from './button.styles'
import { contentStyles }    from './button.styles'
import { fillStyles }       from './button.styles'

export const ButtonElement = styled('button')(
  baseStyles,
  contentStyles,
  shapeStyles,
  appearanceStyles,
  fillStyles
)

export const Button: FC<ButtonProps> = forwardRef(({ children, active, ...props }, ref) => {
  const [hover, hoverProps] = useHover()
  const [pressed, setPressed] = useState<boolean>(false)

  return (
    <ButtonElement
      hover={hover}
      pressed={pressed || active}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      {...hoverProps}
      {...props}
      ref={ref}
    >
      <Content divider={8}>{children}</Content>
    </ButtonElement>
  )
})
