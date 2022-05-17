import { makeVar } from '@apollo/client'

import { Step }    from '../enums'

export const stepVar = makeVar<Step>(Step.BASIC_INFORMATION)
