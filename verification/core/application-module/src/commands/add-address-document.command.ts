export class AddAddressDocumentCommand {
  constructor(
    public readonly id: string,
    public readonly addressDocumentId: string,
    public readonly file: Buffer
  ) {}
}
