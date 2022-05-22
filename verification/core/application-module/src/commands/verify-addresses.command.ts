export class VerifyAddressesCommand {
  constructor(
    public readonly applicantId: string,
    public readonly addresses: Array<{ file: Buffer }>
  ) {}
}
