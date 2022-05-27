import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const BritainIcon = (props: IconProps) => {
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
      <path d='M-4 0H28.0853V16.0427H-4V0Z' fill='#012169' />
      <path
        d='M-4 0V1.79227L24.4977 16.0427H28.0853V14.2504L-0.412334 0H-4ZM28.0853 0V1.79227L-0.412334 16.0427H-4V14.2504L24.4977 0H28.0853Z'
        fill='white'
      />
      <path
        d='M9.36993 0V16.0427H14.7154V0H9.36993ZM-4 5.3486V10.6941H28.0853V5.3486H-4Z'
        fill='white'
      />
      <path
        d='M-4 6.41706V9.6256H28.0853V6.41706H-4ZM10.4384 0V16.0427H13.6469V0H10.4384ZM-4 16.0427L6.69406 10.6941H9.08793L-1.60927 16.0427H-4ZM-4 0L6.69406 5.3486H4.30333L-4 1.19693V0ZM15.0005 5.3486L25.6946 0H28.0853L17.3913 5.3486H15.0005ZM28.0853 16.0427L17.3913 10.6941H19.782L28.0853 14.8457V16.0427Z'
        fill='#C8102E'
      />
    </svg>
  )
}
