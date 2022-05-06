import { IsNotEmpty }           from 'class-validator'

import { ConfirmUploadRequest } from '@files/upload-service-proto'

export class ConfirmUploadDto implements ConfirmUploadRequest {
  @IsNotEmpty()
  id!: string
}
