import { Dispatch }       from 'react'
import { SetStateAction } from 'react'
import { createContext }  from 'react'

import { Step }           from '../enums'

export type Value = [Step, Dispatch<SetStateAction<Step>>]

const Context = createContext<Value>([Step.BASIC_INFORMATION, (v) => {}])

export { Context }
