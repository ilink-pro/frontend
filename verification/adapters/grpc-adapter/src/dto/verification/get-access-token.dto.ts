import { IsNotEmpty }            from 'class-validator'
import { IsString }              from 'class-validator'

import { GetAccessTokenRequest } from '@verification/verification-proto'

export class GetAccessTokenDto implements GetAccessTokenRequest {
  @IsNotEmpty()
  @IsString()
  id!: string
}
