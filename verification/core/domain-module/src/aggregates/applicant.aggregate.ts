import { AggregateRoot }                  from '@nestjs/cqrs'

import assert                             from 'assert'

import { DocumentType }                   from '../enums'
import { ApplicantCreated }               from '../events'
import { AddressDocumentsAdded }          from '../events'
import { IdDocumentAdded }                from '../events'
import { SumsubIdAdded }                  from '../events'
import { AddressUpdated }                 from '../events'
import { ApplicantUpdated }               from '../events'
import { IdEmptyValueException }          from '../exceptions'
import { FirstNameEmptyValueException }   from '../exceptions'
import { LastNameEmptyValueException }    from '../exceptions'
import { DateOfBirthEmptyValueException } from '../exceptions'
import { IdDocument }                     from '../value-objects'
import { AddressDocument }                from '../value-objects'

export interface ApplicantProperties {
  id: string
  firstName: string
  lastName: string
  middleName: string
  dateOfBirth: string
  nationality: string
  countryOfBirth: string
  countryOfResidence: string
  reasonsForOpeningAnAccount: string
  accountWillBeUsedFor: string
  city: string
  street: string
  apartmentOrHouse: string
  postalCode: string
  sumsubId: string
  idDocument: IdDocument
  addressDocuments: Array<AddressDocument>
}

export class Applicant extends AggregateRoot {
  #id!: string

  #firstName!: string

  #lastName!: string

  #middleName!: string

  #dateOfBirth!: string

  #nationality!: string

  #countryOfBirth!: string

  #countryOfResidence!: string

  #reasonsForOpeningAnAccount!: string

  #accountWillBeUsedFor!: string

  #city!: string

  #street!: string

  #apartmentOrHouse!: string

  #postalCode!: string

  #sumsubId!: string

  #idDocument!: IdDocument

  #addressDocuments: Array<AddressDocument> = []

  constructor(properties?: ApplicantProperties) {
    super()

    if (properties) {
      this.#id = properties.id
      this.#firstName = properties.firstName
      this.#lastName = properties.lastName
      this.#middleName = properties.middleName
      this.#dateOfBirth = properties.dateOfBirth
      this.#nationality = properties.nationality
      this.#countryOfBirth = properties.countryOfBirth
      this.#countryOfResidence = properties.countryOfResidence
      this.#reasonsForOpeningAnAccount = properties.reasonsForOpeningAnAccount
      this.#accountWillBeUsedFor = properties.accountWillBeUsedFor
      this.#city = properties.city
      this.#street = properties.street
      this.#apartmentOrHouse = properties.apartmentOrHouse
      this.#postalCode = properties.postalCode
      this.#sumsubId = properties.sumsubId
      this.#idDocument = properties.idDocument
      this.#addressDocuments = properties.addressDocuments || []
    }
  }

  get id() {
    return this.#id
  }

  get firstName() {
    return this.#firstName
  }

  get lastName() {
    return this.#lastName
  }

  get middleName() {
    return this.#middleName
  }

  get dateOfBirth() {
    return this.#dateOfBirth
  }

  get nationality() {
    return this.#nationality
  }

  get countryOfBirth() {
    return this.#countryOfBirth
  }

  get countryOfResidence() {
    return this.#countryOfResidence
  }

  get reasonsForOpeningAnAccount() {
    return this.#reasonsForOpeningAnAccount
  }

  get accountWillBeUsedFor() {
    return this.#accountWillBeUsedFor
  }

  get city() {
    return this.#city
  }

  get street() {
    return this.#street
  }

  get apartmentOrHouse() {
    return this.#apartmentOrHouse
  }

  get postalCode() {
    return this.#postalCode
  }

  get sumsubId() {
    return this.#sumsubId
  }

  get idDocument() {
    return this.#idDocument
  }

  get addressDocuments() {
    return this.#addressDocuments
  }

  get properties() {
    return {
      id: this.#id,
      firstName: this.#firstName,
      lastName: this.#lastName,
      middleName: this.#middleName,
      dateOfBirth: this.#dateOfBirth,
      nationality: this.#nationality,
      countryOfBirth: this.#countryOfBirth,
      countryOfResidence: this.#countryOfResidence,
      reasonsForOpeningAnAccount: this.#reasonsForOpeningAnAccount,
      accountWillBeUsedFor: this.#accountWillBeUsedFor,
      city: this.#city,
      street: this.#street,
      apartmentOrHouse: this.#apartmentOrHouse,
      postalCode: this.#postalCode,
      sumsubId: this.#sumsubId,
      idDocument: this.#idDocument,
      addressDocuments: this.#addressDocuments,
    }
  }

  async create(
    id: string,
    firstName: string,
    lastName: string,
    middleName: string,
    dateOfBirth: string,
    nationality: string,
    countryOfBirth: string,
    countryOfResidence: string,
    reasonsForOpeningAnAccount: string,
    accountWillBeUsedFor: string,
    city: string,
    street: string,
    apartmentOrHouse: string,
    postalCode: string
  ) {
    assert.ok(id, new IdEmptyValueException())
    assert.ok(firstName, new FirstNameEmptyValueException())
    assert.ok(lastName, new LastNameEmptyValueException())
    assert.ok(dateOfBirth, new DateOfBirthEmptyValueException())

    this.apply(
      new ApplicantCreated(
        id,
        firstName,
        lastName,
        middleName,
        dateOfBirth,
        nationality,
        countryOfBirth,
        countryOfResidence,
        reasonsForOpeningAnAccount,
        accountWillBeUsedFor,
        city,
        street,
        apartmentOrHouse,
        postalCode
      )
    )

    return this
  }

  onApplicantCreated(event: ApplicantCreated) {
    this.#id = event.id
    this.#firstName = event.firstName
    this.#lastName = event.lastName
    this.#middleName = event.middleName
    this.#dateOfBirth = event.dateOfBirth
    this.#nationality = event.nationality
    this.#countryOfBirth = event.countryOfBirth
    this.#countryOfResidence = event.countryOfResidence
    this.#reasonsForOpeningAnAccount = event.reasonsForOpeningAnAccount
    this.#accountWillBeUsedFor = event.accountWillBeUsedFor
    this.#city = event.city
    this.#street = event.street
    this.#apartmentOrHouse = event.apartmentOrHouse
    this.#postalCode = event.postalCode
  }

  async addIdDocument(
    idDocumentId: string,
    type: DocumentType,
    frontSideId: string,
    backSideId: string
  ) {
    this.apply(new IdDocumentAdded(idDocumentId, type, frontSideId, backSideId))

    return this
  }

  onIdDocumentAdded(event: IdDocumentAdded) {
    this.#idDocument = new IdDocument(
      event.idDocumentId,
      event.type,
      event.frontSideId,
      event.backSideId
    )
  }

  async addAddressDocuments(addressDocuments: Array<AddressDocument>) {
    this.apply(new AddressDocumentsAdded(addressDocuments))

    return this
  }

  onAddressDocumentsAdded(event: AddressDocumentsAdded) {
    for (const document of event.addressDocuments) {
      this.#addressDocuments.push(document)
    }
  }

  async addSumsubId(sumsubId: string) {
    this.apply(new SumsubIdAdded(sumsubId))

    return this
  }

  onSumsubIdAdded(event: SumsubIdAdded) {
    this.#sumsubId = event.sumsubId
  }

  async updateAddress(city: string, apartmentOrHouse: string, postalCode: string) {
    this.apply(new AddressUpdated(city, apartmentOrHouse, postalCode))
  }

  onAddressUpdated(event: AddressUpdated) {
    this.#city = event.city
    this.#apartmentOrHouse = event.apartmentOrHouse
    this.#postalCode = event.postalCode
  }

  async update(
    firstName: string,
    lastName: string,
    middleName: string,
    dateOfBirth: string,
    nationality: string,
    countryOfBirth: string,
    countryOfResidence: string,
    reasonsForOpeningAnAccount: string,
    accountWillBeUsedFor: string
  ) {
    assert.ok(firstName, new FirstNameEmptyValueException())
    assert.ok(lastName, new LastNameEmptyValueException())
    assert.ok(dateOfBirth, new DateOfBirthEmptyValueException())

    this.apply(
      new ApplicantUpdated(
        firstName,
        lastName,
        middleName,
        dateOfBirth,
        nationality,
        countryOfBirth,
        countryOfResidence,
        reasonsForOpeningAnAccount,
        accountWillBeUsedFor
      )
    )
  }

  onApplicantUpdated(event: ApplicantUpdated) {
    this.#firstName = event.firstName
    this.#lastName = event.lastName
    this.#middleName = event.middleName
    this.#dateOfBirth = event.dateOfBirth
    this.#nationality = event.nationality
    this.#countryOfBirth = event.countryOfBirth
    this.#countryOfResidence = event.countryOfResidence
    this.#reasonsForOpeningAnAccount = event.reasonsForOpeningAnAccount
    this.#accountWillBeUsedFor = event.accountWillBeUsedFor
  }
}
