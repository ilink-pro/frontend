import { IsNotEmpty }             from 'class-validator'
import { IsString }               from 'class-validator'

import { VerifyApplicantRequest } from '@verification/verification-proto'

export class VerifyApplicantDto implements VerifyApplicantRequest {
  @IsNotEmpty()
  @IsString()
  id!: string
}
