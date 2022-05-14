import React        from 'react'
import { FC }       from 'react'
import { useState } from 'react'

import { Step }     from '../enums'
import { Context }  from './context'

const StepProvider: FC = ({ children }) => {
  const [step, setStep] = useState<Step>(Step.BASIC_INFORMATION)

  return <Context.Provider value={[step, setStep]}>{children}</Context.Provider>
}

export { StepProvider }
