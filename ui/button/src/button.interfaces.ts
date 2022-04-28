import { ButtonProps as BaseButtonProps } from '@ilink-ui-parts/button'

export type ButtonVariant = 'primary' | 'ghost'

export type ButtonSize = 'normal' | 'ghost'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  active?: boolean
  ref?: any
}
