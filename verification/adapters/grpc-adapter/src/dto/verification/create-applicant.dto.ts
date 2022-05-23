import { IsNotEmpty }             from 'class-validator'
import { IsOptional }             from 'class-validator'
import { IsString }               from 'class-validator'

import { CreateApplicantRequest } from '@verification/verification-proto'

export class CreateApplicantDto implements CreateApplicantRequest {
  @IsNotEmpty()
  @IsString()
  firstName!: string

  @IsNotEmpty()
  @IsString()
  lastName!: string

  @IsOptional()
  @IsString()
  middleName!: string

  @IsNotEmpty()
  @IsString()
  dateOfBirth!: string

  @IsOptional()
  @IsString()
  nationality!: string

  @IsOptional()
  @IsString()
  countryOfBirth!: string

  @IsOptional()
  @IsString()
  countryOfResidence!: string

  @IsOptional()
  @IsString()
  reasonsForOpeningAnAccount!: string

  @IsOptional()
  @IsString()
  accountWillBeUsedFor!: string

  @IsOptional()
  @IsString()
  city!: string

  @IsOptional()
  @IsString()
  street!: string

  @IsOptional()
  @IsString()
  apartmentOrHouse!: string

  @IsOptional()
  @IsString()
  postalCode!: string
}
