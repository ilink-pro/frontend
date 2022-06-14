import { Type }                   from 'class-transformer'
import { ValidateNested }         from 'class-validator'
import { IsOptional }             from 'class-validator'

import { ListFilesRequest_Query } from '@files/files-proto'

import { IdQueryDto }             from './id-query.dto'

export class QueryDto implements ListFilesRequest_Query {
  @IsOptional()
  @ValidateNested()
  @Type(() => IdQueryDto)
  id?: IdQueryDto
}
