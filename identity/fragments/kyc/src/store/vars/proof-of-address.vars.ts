import { makeVar }          from '@apollo/client'

import { AddressDocuments } from '../interfaces'

export const addressDocumentsVar = makeVar<AddressDocuments>(undefined)
