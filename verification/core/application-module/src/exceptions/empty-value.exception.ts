import { AssertionError } from 'assert'

export class ApplicantIdEmptyValueException extends AssertionError {
  constructor(options: { message?: string | undefined } = {}) {
    super({ ...options, message: options.message || `Required field 'applicantId'` })
  }
}
