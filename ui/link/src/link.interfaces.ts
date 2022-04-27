import { TypographyProps } from 'styled-system'
import { ColorProps }      from 'styled-system'

export interface BaseLinkProps {
  active?: boolean
}

export interface LinkProps extends TypographyProps, ColorProps {
  keep?: boolean
  path?: string
}
