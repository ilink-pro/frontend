import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ChinaIcon = (props: IconProps) => {
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
      <path d='M0 0H24V16H0V0Z' fill='#DE2910' />
      <path
        d='M2.56155 6.92156L4.00153 2.60156L5.44152 6.92156L1.60156 4.28156H6.40151L2.56155 6.92156Z'
        fill='#FFDE00'
      />
      <path
        d='M8.80511 2.68458L7.32319 3.01298L8.31169 1.86109L8.21473 3.41138L7.39236 2.03891L8.80511 2.68458Z'
        fill='#FFDE00'
      />
      <path
        d='M10.3023 4.57771L8.80902 4.30566L10.1669 3.62731L9.47627 5.01865L9.25055 3.43466L10.3023 4.57771Z'
        fill='#FFDE00'
      />
      <path
        d='M10.0818 7.23672L8.82934 6.37927L10.3458 6.31373L9.14778 7.30242L9.58772 5.76409L10.0818 7.23672Z'
        fill='#FFDE00'
      />
      <path
        d='M8.19911 8.97437L7.37497 7.6997L8.79907 8.22495L7.31216 8.6742L8.3121 7.42516L8.19911 8.97437Z'
        fill='#FFDE00'
      />
    </svg>
  )
}
