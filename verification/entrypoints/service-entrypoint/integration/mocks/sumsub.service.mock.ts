import { v4 as uuid }            from 'uuid'

import { AddIdDocumentResponse } from '@verification/domain-module'
import { ApplicantPayload }      from '@verification/domain-module'
import { DocumentMetadata }      from '@verification/domain-module'
import { SumsubServicePort }     from '@verification/domain-module'
import { VerificationStatus }    from '@verification/domain-module'

export class SumsubServiceMock implements SumsubServicePort {
  createApplicant(payload: ApplicantPayload): Promise<{ id: string }> {
    return new Promise((resolve) => {
      resolve({ id: uuid() })
    })
  }

  addIdDocument(
    applicantId: string,
    file: Buffer,
    metadata: DocumentMetadata
  ): Promise<AddIdDocumentResponse> {
    return new Promise((resolve) => {
      resolve({
        idDocType: 'idDocType',
      })
    })
  }

  generateAccessToken(userId: string): Promise<string> {
    return new Promise((resolve) => {
      resolve('accessToken')
    })
  }

  getVerificationStatus(applicantId: string): Promise<VerificationStatus> {
    return new Promise((resolve) => {
      resolve(VerificationStatus.PENDING)
    })
  }

  getApplicant(applicantId: string): Promise<{ applicant: any }> {
    return new Promise((resolve) => {
      resolve({ applicant: { id: uuid() } })
    })
  }
}
