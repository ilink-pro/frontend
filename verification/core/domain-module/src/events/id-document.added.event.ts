import { DocumentType } from '../enums'

export class IdDocumentAdded {
  constructor(
    public readonly idDocumentId: string,
    public readonly type: DocumentType,
    public readonly frontSideId: string,
    public readonly backSideId: string
  ) {}
}
