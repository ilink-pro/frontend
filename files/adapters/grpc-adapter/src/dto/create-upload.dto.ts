import { IsNotEmpty }          from 'class-validator'
import { IsInt }               from 'class-validator'
import { Min }                 from 'class-validator'

import { CreateUploadRequest } from '@files/upload-proto'

export class CreateUploadDto implements CreateUploadRequest {
  @IsNotEmpty()
  bucket!: string

  @IsNotEmpty()
  name!: string

  @IsInt()
  @Min(1)
  size!: number
}
