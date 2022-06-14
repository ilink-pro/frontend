/* eslint-disable max-classes-per-file */
import { AssertionError } from 'assert'

export class ApplicantIdEmptyValueException extends AssertionError {
  constructor(options: { message?: string | undefined } = {}) {
    super({ ...options, message: options.message || `Required field 'applicantId'` })
  }
}

export class IdDocumentEmptyValueException extends AssertionError {
  constructor(options: { message?: string | undefined } = {}) {
    super({ ...options, message: options.message || `Required field 'idDocument'` })
  }
}

export class AddressDocumentsEmptyValueException extends AssertionError {
  constructor(options: { message?: string | undefined } = {}) {
    super({ ...options, message: options.message || `Required field 'addressDocuments'` })
  }
}
