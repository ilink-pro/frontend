import { IsNotEmpty }           from 'class-validator'

import { ConfirmUploadRequest } from '@files/upload-proto'

export class ConfirmUploadDto implements ConfirmUploadRequest {
  @IsNotEmpty()
  id!: string
}
