import { Applicant } from '../aggregates'

export abstract class ApplicantRepository {
  create(): Applicant {
    return new Applicant()
  }

  abstract save(aggregate: Applicant): Promise<void>

  abstract findById(id: string): Promise<Applicant | undefined>
}
