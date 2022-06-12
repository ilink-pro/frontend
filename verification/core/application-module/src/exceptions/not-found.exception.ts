import { AssertionError } from 'assert'

export class ApplicantNotFoundException extends AssertionError {
  constructor(options: { message?: string | undefined; applicantId?: string } = {}) {
    super({
      ...options,
      message: options.message || `Applicant with id ${options.applicantId} not found`,
    })
  }
}
