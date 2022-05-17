import { makeVar }      from '@apollo/client'

import { DocumentType } from '../enums'
import { FrontSide }    from '../interfaces'
import { BackSide }     from '../interfaces'

export const documentTypeVar = makeVar<DocumentType>(DocumentType.PASSPORT)
export const frontSideVar = makeVar<FrontSide>(undefined)
export const backSideVar = makeVar<BackSide>(undefined)
