export class AddressUpdated {
  constructor(
    public readonly city: string,
    public readonly apartmentOrHouse: string,
    public readonly postalCode: string
  ) {}
}
