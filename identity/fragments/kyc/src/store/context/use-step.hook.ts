import { useContext } from 'react'

import { Context }    from './context'
import { Value }      from './context'

const useStep = () => useContext<Value>(Context)

export { useStep }
