import React             from 'react'
import { FC }            from 'react'

import { RepeaterProps } from './repeater.interfaces'

const Repeater: FC<RepeaterProps> = ({ items, onIteration }) => <>{items.map(onIteration)}</>

export { Repeater }
