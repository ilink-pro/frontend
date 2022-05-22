import { DocumentType } from '@verification/domain-module'

export class VerifyDocumentsCommand {
  constructor(
    public readonly applicantId: string,
    public readonly type: DocumentType,
    public readonly document: {
      frontSide: Buffer
      backSide: Buffer
    }
  ) {}
}
