/* eslint-disable max-classes-per-file */

import { AssertionError } from 'assert'

export class IdEmptyValueException extends AssertionError {
  constructor(options: { message?: string | undefined } = {}) {
    super({ ...options, message: options.message || `Required field 'id'` })
  }
}

export class FirstNameEmptyValueException extends AssertionError {
  constructor(options: { message?: string | undefined } = {}) {
    super({ ...options, message: options.message || `Required field 'firstName'` })
  }
}

export class LastNameEmptyValueException extends AssertionError {
  constructor(options: { message?: string | undefined } = {}) {
    super({ ...options, message: options.message || `Required field 'lastName'` })
  }
}

export class DateOfBirthEmptyValueException extends AssertionError {
  constructor(options: { message?: string | undefined } = {}) {
    super({ ...options, message: options.message || `Required field 'dateOfBirth'` })
  }
}
