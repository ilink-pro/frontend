import { DocumentType } from '@verification/domain-module'

export class AddIdDocumentCommand {
  constructor(
    public readonly id: string,
    public readonly idDocumentId: string,
    public readonly type: DocumentType,
    public readonly frontSideId: string,
    public readonly backSideId: string
  ) {}
}
