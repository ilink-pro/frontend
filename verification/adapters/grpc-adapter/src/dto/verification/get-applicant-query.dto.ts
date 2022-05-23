import { IsNotEmpty }                from 'class-validator'
import { IsOptional }                from 'class-validator'
import { IsString }                  from 'class-validator'

import { GetApplicantRequest_Query } from '@verification/verification-proto'

export class GetApplicantQueryDto implements GetApplicantRequest_Query {
  @IsNotEmpty()
  @IsString()
  id!: string

  @IsOptional()
  @IsString()
  externalId!: string
}
