import { IsNotEmpty }           from 'class-validator'
import { IsString }             from 'class-validator'

import { UpdateAddressRequest } from '@verification/verification-proto'

export class UpdateAddressDto implements UpdateAddressRequest {
  @IsNotEmpty()
  @IsString()
  id!: string

  @IsNotEmpty()
  @IsString()
  city!: string

  @IsNotEmpty()
  @IsString()
  apartmentOrHouse!: string

  @IsNotEmpty()
  @IsString()
  postalCode!: string
}
