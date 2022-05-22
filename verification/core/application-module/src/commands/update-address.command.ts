export class UpdateAddressCommand {
  constructor(
    public readonly id: string,
    public readonly city: string,
    public readonly apartmentOrHouse: string,
    public readonly postalCode: string
  ) {}
}
