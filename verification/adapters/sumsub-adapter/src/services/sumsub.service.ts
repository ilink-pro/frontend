import assert                    from 'assert'
import axios                     from 'axios'
import { AxiosResponse }         from 'axios'

import { AddIdDocumentResponse } from '@verification/domain-module'
import { ApplicantPayload }      from '@verification/domain-module'
import { DocumentMetadata }      from '@verification/domain-module'
import { SumsubServicePort }     from '@verification/domain-module'
import { VerificationStatus }    from '@verification/domain-module'

export class SumsubService implements SumsubServicePort {
  private readonly URL: string = process.env.SUMSUB_BASE_URL || 'https://api.sumsub.com'

  private readonly LEVEL_NAME: string = process.env.SUMSUB_LEVEL_NAME || 'basic-kyc-level'

  private readonly TTL: number | string = process.env.SUMSUB_ACCESS_TOKEN_TTL || 600

  private readonly headers = {
    'Content-Type': 'application/json',
    'X-App-Token': process.env.SUMSUB_APP_TOKEN || '',
  }

  private async request(
    path: string,
    type: 'post' | 'get',
    body?: Object
  ): Promise<AxiosResponse<any, any>> {
    return type === 'get'
      ? axios.get(`${this.URL}/${path}`, { headers: this.headers })
      : axios.post(`${this.URL}/${path}`, body, { headers: this.headers })
  }

  async createApplicant(payload: ApplicantPayload): Promise<{ id: string }> {
    const response = await this.request(
      `/resources/applicants?levelName=${this.LEVEL_NAME}`,
      'post',
      payload
    )

    assert.ok(response.data)
    assert.ok(response.data.id)

    return { id: response.data.id }
  }

  async addIdDocument(
    applicantId: string,
    file: Buffer,
    metadata: DocumentMetadata
  ): Promise<AddIdDocumentResponse> {
    const response = await this.request(`/resources/applicants/${applicantId}/info/idDoc`, 'post', {
      content: file,
      metadata,
    })

    assert.ok(response.data)

    const { idDocType, errors } = response.data

    return {
      idDocType,
      errors,
    }
  }

  async generateAccessToken(userId: string): Promise<string> {
    const response = await this.request(
      `/resources/accessTokens?userId=${userId}&ttlInSecs=600&levelName=${this.LEVEL_NAME}`,
      'post'
    )

    assert.ok(response.data)
    assert.ok(response.data.token)

    return response.data.token
  }

  async getVerificationStatus(applicantId: string): Promise<VerificationStatus> {
    const response = await this.request(`/resources/applicants/${applicantId}/one`, 'get')

    assert.ok(response.data)
    assert.ok(response.data.review)

    const { review } = response.data

    if (review.reviewStatus === 'complted') {
      if (review.reviewResult.reviewAnswer === 'GREEN') return VerificationStatus.SUCCESS
      if (review.reviewResult.reviewAnswer === 'RED') return VerificationStatus.CANCELLED
    }

    return VerificationStatus.PENDING
  }

  async getApplicant(applicantId: string): Promise<any> {
    const response = await this.request(`/resources/applicants/${applicantId}/one`, 'get')

    assert.ok(response.data)

    return { applicant: response.data }
  }
}
