import assert                    from 'assert'
import axios                     from 'axios'
import crypto                    from 'crypto'
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

  constructor() {
    axios.interceptors.request.use(this.createSignature.bind(this))
  }

  private createSignature(config) {
    const ts = Math.floor(Date.now() / 1000)
    const signature = crypto.createHmac('sha256', process.env.SUMSUB_SECRET_KEY || '')

    signature.update(ts + config.method.toUpperCase() + config.url.replace(this.URL, ''))

    if (config.data) {
      signature.update(JSON.stringify(config.data))
    }

    /* eslint-disable no-param-reassign */

    config.headers['X-App-Access-Ts'] = ts
    config.headers['X-App-Access-Sig'] = signature.digest('hex')

    /* eslint-enable no-param-reassign */

    return config
  }

  private async request(
    path: string,
    type: 'post' | 'get',
    body?: Object
  ): Promise<AxiosResponse<any, any>> {
    return type === 'get'
      ? axios.get(`${this.URL}${path}`, { headers: this.headers })
      : axios.post(`${this.URL}${path}`, body, { headers: this.headers })
  }

  async createApplicant(payload: ApplicantPayload): Promise<{ id: string }> {
    const response = await this.request(
      `/resources/applicants?levelName=${this.LEVEL_NAME}`,
      'post',
      payload
    )

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

    const { idDocType, errors } = response.data

    return {
      idDocType,
      errors,
    }
  }

  async generateAccessToken(userId: string): Promise<string> {
    const response = await this.request(
      `/resources/accessTokens?userId=${userId}&ttlInSecs=${this.TTL}&levelName=${this.LEVEL_NAME}`,
      'post'
    )

    assert.ok(response.data.token)

    return response.data.token
  }

  async getVerificationStatus(applicantId: string): Promise<VerificationStatus> {
    const response = await this.request(`/resources/applicants/${applicantId}/one`, 'get')

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

    return { applicant: response.data }
  }
}
