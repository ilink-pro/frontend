import { Type }                 from 'class-transformer'
import { IsOptional }           from 'class-validator'
import { ValidateNested }       from 'class-validator'

import { GetApplicantRequest }  from '@verification/verification-proto'

import { GetApplicantQueryDto } from './get-applicant-query.dto'

export class GetApplicantDto implements GetApplicantRequest {
  @IsOptional()
  @ValidateNested()
  @Type(() => GetApplicantQueryDto)
  query?: GetApplicantQueryDto
}
