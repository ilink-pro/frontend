import { Applicant }                      from '../aggregates'
import { DocumentType }                   from '../enums'
import { IdEmptyValueException }          from '../exceptions'
import { FirstNameEmptyValueException }   from '../exceptions'
import { LastNameEmptyValueException }    from '../exceptions'
import { DateOfBirthEmptyValueException } from '../exceptions'
import { AddressDocument }                from '../value-objects'

describe('verification', () => {
  describe('domain', () => {
    describe('applicant', () => {
      it('check create with empty id', async () => {
        expect.assertions(1)

        expect(() =>
          new Applicant().create(
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          )).rejects.toThrowError(IdEmptyValueException)
      })

      it('check create with empty first name', async () => {
        expect.assertions(1)

        expect(() =>
          new Applicant().create(
            'id',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          )).rejects.toThrowError(FirstNameEmptyValueException)
      })

      it('check create with empty last name', async () => {
        expect.assertions(1)

        expect(() =>
          new Applicant().create(
            'id',
            'firstName',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          )).rejects.toThrowError(LastNameEmptyValueException)
      })

      it('check create with empty date of birth', async () => {
        expect.assertions(1)

        expect(() =>
          new Applicant().create(
            'id',
            'firstName',
            'lastName',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          )).rejects.toThrowError(DateOfBirthEmptyValueException)
      })

      it('check create', async () => {
        const applicant = new Applicant()

        await applicant.create(
          'id',
          'firstName',
          'lastName',
          'middleName',
          'dateOfBirth',
          'nationality',
          'countryOfBirth',
          'countryOfResidence',
          'reasonsForOpeningAnAccount',
          'accountWillBeUsedFor',
          'city',
          'street',
          'apartmentOrHouse',
          'postalCode'
        )

        expect(applicant.id).toBe('id')
        expect(applicant.firstName).toBe('firstName')
        expect(applicant.lastName).toBe('lastName')
        expect(applicant.middleName).toBe('middleName')
        expect(applicant.dateOfBirth).toBe('dateOfBirth')
        expect(applicant.nationality).toBe('nationality')
        expect(applicant.countryOfBirth).toBe('countryOfBirth')
        expect(applicant.countryOfResidence).toBe('countryOfResidence')
        expect(applicant.reasonsForOpeningAnAccount).toBe('reasonsForOpeningAnAccount')
        expect(applicant.accountWillBeUsedFor).toBe('accountWillBeUsedFor')
        expect(applicant.city).toBe('city')
        expect(applicant.street).toBe('street')
        expect(applicant.apartmentOrHouse).toBe('apartmentOrHouse')
        expect(applicant.postalCode).toBe('postalCode')

        expect(applicant.getUncommittedEvents()).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: 'id',
              firstName: 'firstName',
              lastName: 'lastName',
              middleName: 'middleName',
              dateOfBirth: 'dateOfBirth',
              nationality: 'nationality',
              countryOfBirth: 'countryOfBirth',
              countryOfResidence: 'countryOfResidence',
              reasonsForOpeningAnAccount: 'reasonsForOpeningAnAccount',
              accountWillBeUsedFor: 'accountWillBeUsedFor',
              city: 'city',
              street: 'street',
              apartmentOrHouse: 'apartmentOrHouse',
              postalCode: 'postalCode',
            }),
          ])
        )
      })

      it('check update', async () => {
        const applicant = new Applicant()

        applicant.create(
          'id',
          'firstName',
          'lastName',
          'middleName',
          'dateOfBirth',
          'nationality',
          'countryOfBirth',
          'countryOfResidence',
          'reasonsForOpeningAnAccount',
          'accountWillBeUsedFor',
          'city',
          'street',
          'apartmentOrHouse',
          'postalCode'
        )

        applicant.commit()

        await applicant.update(
          'firstName1',
          'lastName1',
          'middleName1',
          'dateOfBirth1',
          'nationality1',
          'countryOfBirth1',
          'countryOfResidence1',
          'reasonsForOpeningAnAccount1',
          'accountWillBeUsedFor1'
        )

        expect(applicant.firstName).toBe('firstName1')
        expect(applicant.lastName).toBe('lastName1')
        expect(applicant.middleName).toBe('middleName1')
        expect(applicant.dateOfBirth).toBe('dateOfBirth1')
        expect(applicant.nationality).toBe('nationality1')
        expect(applicant.countryOfBirth).toBe('countryOfBirth1')
        expect(applicant.countryOfResidence).toBe('countryOfResidence1')
        expect(applicant.reasonsForOpeningAnAccount).toBe('reasonsForOpeningAnAccount1')
        expect(applicant.accountWillBeUsedFor).toBe('accountWillBeUsedFor1')

        expect(applicant.getUncommittedEvents()).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              firstName: 'firstName1',
              lastName: 'lastName1',
              middleName: 'middleName1',
              dateOfBirth: 'dateOfBirth1',
              nationality: 'nationality1',
              countryOfBirth: 'countryOfBirth1',
              countryOfResidence: 'countryOfResidence1',
              reasonsForOpeningAnAccount: 'reasonsForOpeningAnAccount1',
              accountWillBeUsedFor: 'accountWillBeUsedFor1',
            }),
          ])
        )
      })

      it('check update address', async () => {
        const applicant = new Applicant()

        applicant.create(
          'id',
          'firstName',
          'lastName',
          'middleName',
          'dateOfBirth',
          'nationality',
          'countryOfBirth',
          'countryOfResidence',
          'reasonsForOpeningAnAccount',
          'accountWillBeUsedFor',
          'city',
          'street',
          'apartmentOrHouse',
          'postalCode'
        )

        applicant.commit()

        await applicant.updateAddress('city1', 'apartmentOrHouse1', 'postalCode1')

        expect(applicant.city).toBe('city1')
        expect(applicant.apartmentOrHouse).toBe('apartmentOrHouse1')
        expect(applicant.postalCode).toBe('postalCode1')

        expect(applicant.getUncommittedEvents()).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              city: 'city1',
              apartmentOrHouse: 'apartmentOrHouse1',
              postalCode: 'postalCode1',
            }),
          ])
        )
      })

      it('check add sumsub id', async () => {
        const applicant = new Applicant()

        applicant.create(
          'id',
          'firstName',
          'lastName',
          'middleName',
          'dateOfBirth',
          'nationality',
          'countryOfBirth',
          'countryOfResidence',
          'reasonsForOpeningAnAccount',
          'accountWillBeUsedFor',
          'city',
          'street',
          'apartmentOrHouse',
          'postalCode'
        )

        applicant.commit()

        applicant.addSumsubId('sumsubId')

        expect(applicant.sumsubId).toBe('sumsubId')

        expect(applicant.getUncommittedEvents()).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              sumsubId: 'sumsubId',
            }),
          ])
        )
      })

      it('check add ID document', async () => {
        const applicant = new Applicant()

        applicant.create(
          'id',
          'firstName',
          'lastName',
          'middleName',
          'dateOfBirth',
          'nationality',
          'countryOfBirth',
          'countryOfResidence',
          'reasonsForOpeningAnAccount',
          'accountWillBeUsedFor',
          'city',
          'street',
          'apartmentOrHouse',
          'postalCode'
        )

        applicant.commit()

        applicant.addIdDocument('id', DocumentType.PASSPORT, 'fsId', 'bsId')

        expect(applicant.idDocument).toBeDefined()
        expect(applicant.idDocument.id).toBe('id')
        expect(applicant.idDocument.type).toBe(DocumentType.PASSPORT)
        expect(applicant.idDocument.frontSideId).toBe('fsId')
        expect(applicant.idDocument.backSideId).toBe('bsId')

        expect(applicant.getUncommittedEvents()).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              idDocumentId: 'id',
              type: DocumentType.PASSPORT,
              frontSideId: 'fsId',
              backSideId: 'bsId',
            }),
          ])
        )
      })

      it('check add address documents', async () => {
        const applicant = new Applicant()

        applicant.create(
          'id',
          'firstName',
          'lastName',
          'middleName',
          'dateOfBirth',
          'nationality',
          'countryOfBirth',
          'countryOfResidence',
          'reasonsForOpeningAnAccount',
          'accountWillBeUsedFor',
          'city',
          'street',
          'apartmentOrHouse',
          'postalCode'
        )

        applicant.commit()

        const addressDocuments = [
          new AddressDocument('id1', 'file1'),
          new AddressDocument('id2', 'file2'),
          new AddressDocument('id3', 'file3'),
        ]

        applicant.addAddressDocuments(addressDocuments)

        expect(applicant.addressDocuments).toBeDefined()

        expect(applicant.getUncommittedEvents()).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              addressDocuments,
            }),
          ])
        )
      })
    })
  })
})
