import { IsNotEmpty }           from 'class-validator'
import { IsString }             from 'class-validator'
import { IsEnum }               from 'class-validator'

import { DocumentType }         from '@verification/domain-module'
import { AddIdDocumentRequest } from '@verification/verification-proto'

export class AddIdDocumentDto implements AddIdDocumentRequest {
  @IsNotEmpty()
  @IsString()
  id!: string

  @IsNotEmpty()
  @IsEnum(DocumentType)
  type!: DocumentType

  @IsNotEmpty()
  @IsString()
  frontSideId!: string

  @IsNotEmpty()
  @IsString()
  backSideId!: string
}
