import { IsNotEmpty }                 from 'class-validator'
import { IsString }                   from 'class-validator'
import { ValidateNested }             from 'class-validator'

import { AddAddressDocumentsRequest } from '@verification/verification-proto'
import { AddressDocument }            from '@verification/verification-proto'

export class AddAddressDocumentsDto implements AddAddressDocumentsRequest {
  @IsNotEmpty()
  @IsString()
  id!: string

  @IsNotEmpty()
  @ValidateNested()
  addressDocuments!: AddressDocument[]
}
