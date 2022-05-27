import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const RussiaIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 24 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path fillRule='evenodd' clipRule='evenodd' d='M0 0H24V16H0V0Z' fill='white' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 5.33215H24V15.9988H0V5.33215Z'
        fill='#0039A6'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 10.6678H24V16.0012H0V10.6678Z'
        fill='#D52B1E'
      />
    </svg>
  )
}
