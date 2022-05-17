import { makeVar }          from '@apollo/client'

import { City }             from '../interfaces'
import { Street }           from '../interfaces'
import { ApartmentOrHouse } from '../interfaces'
import { PostalCode }       from '../interfaces'

export const cityVar = makeVar<City>('')
export const streetVar = makeVar<Street>('')
export const apartmentOrHouseVar = makeVar<ApartmentOrHouse>('')
export const postalCodeVar = makeVar<PostalCode>('')
