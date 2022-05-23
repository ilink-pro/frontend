import { IsNotEmpty }             from 'class-validator'
import { IsOptional }             from 'class-validator'
import { IsString }               from 'class-validator'

import { UpdateApplicantRequest } from '@verification/verification-proto'

export class UpdateApplicantDto implements UpdateApplicantRequest {
  @IsNotEmpty()
  @IsString()
  id!: string

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
}
