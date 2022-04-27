import { InputHTMLAttributes } from 'react'
import { ReactNode }           from 'react'

export interface Item {
  icon?: ReactNode
  content: string
}

export interface SelectProps extends Omit<InputHTMLAttributes<any>, 'onChange'> {
  label?: string
  items: Array<Item>
  value?: any
  onChange: any
  placeholder?: string
  disabled?: boolean
}
