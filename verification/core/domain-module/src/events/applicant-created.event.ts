export class ApplicantCreated {
  constructor(
    public readonly id: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly middleName: string,
    public readonly dateOfBirth: string,
    public readonly nationality: string,
    public readonly countryOfBirth: string,
    public readonly countryOfResidence: string,
    public readonly reasonsForOpeningAnAccount: string,
    public readonly accountWillBeUsedFor: string,
    public readonly city: string,
    public readonly street: string,
    public readonly apartmentOrHouse: string,
    public readonly postalCode: string
  ) {}
}
