import { makeVar }              from '@apollo/client'

import { AccountWillBeUsedFor } from '../interfaces'
import { CountryOfBirth }       from '../interfaces'
import { CountryOfResidence }   from '../interfaces'
import { DateOfBirth }          from '../interfaces'
import { FirstName }            from '../interfaces'
import { MiddleName }           from '../interfaces'
import { Nationality }          from '../interfaces'
import { ReasonsForOpening }    from '../interfaces'
import { LastName }             from '../interfaces'

export const firstNameVar = makeVar<FirstName>('')
export const lastNameVar = makeVar<LastName>('')
export const middleNameVar = makeVar<MiddleName>('')
export const dateOfBirthVar = makeVar<DateOfBirth>('')
export const nationalityVar = makeVar<Nationality>('')
export const countryOfBirthVar = makeVar<CountryOfBirth>('')
export const countryOfResidenceVar = makeVar<CountryOfResidence>('')
export const reasonsForOpeningVar = makeVar<ReasonsForOpening>('')
export const accountWillBeUsedForVar = makeVar<AccountWillBeUsedFor>('')
