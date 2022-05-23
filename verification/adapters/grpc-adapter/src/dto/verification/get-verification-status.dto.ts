import { IsNotEmpty }                   from 'class-validator'
import { IsString }                     from 'class-validator'

import { GetVerificationStatusRequest } from '@verification/verification-proto'

export class GetVerificationStatusDto implements GetVerificationStatusRequest {
  @IsNotEmpty()
  @IsString()
  id!: string
}
