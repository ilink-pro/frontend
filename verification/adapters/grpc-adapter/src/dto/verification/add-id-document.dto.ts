import { Type }                 from 'class-transformer'
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
  @Type(() => Uint8Array)
  frontSide!: Uint8Array

  @IsNotEmpty()
  @Type(() => Uint8Array)
  backSide!: Uint8Array
}
