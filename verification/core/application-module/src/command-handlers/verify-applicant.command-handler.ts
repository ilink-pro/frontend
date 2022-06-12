/* eslint-disable no-await-in-loop */

import { Inject }                              from '@nestjs/common'
import { CommandHandler }                      from '@nestjs/cqrs'
import { ICommandHandler }                     from '@nestjs/cqrs'

import assert                                  from 'assert'
import fetch                                   from 'node-fetch'
import { firstValueFrom }                      from 'rxjs'

import { FILES_SERVICE_CLIENT_TOKEN }          from '@files/files-proto'
import { FilesServiceClient }                  from '@files/files-proto'
import { ApplicantRepository }                 from '@verification/domain-module'
import { SUMSUB_SERVICE }                      from '@verification/domain-module'
import { SumsubServicePort }                   from '@verification/domain-module'

import { VerifyApplicantCommand }              from '../commands'
import { ApplicantNotFoundException }          from '../exceptions'
import { IdDocumentEmptyValueException }       from '../exceptions'
import { AddressDocumentsEmptyValueException } from '../exceptions'

@CommandHandler(VerifyApplicantCommand)
export class VerifyApplicantCommandHandler
  implements ICommandHandler<VerifyApplicantCommand, void>
{
  constructor(
    @Inject(SUMSUB_SERVICE)
    private readonly sumsubService: SumsubServicePort,
    @Inject(FILES_SERVICE_CLIENT_TOKEN)
    private readonly client: FilesServiceClient,
    private readonly applicantRepository: ApplicantRepository
  ) {}

  async execute(command: VerifyApplicantCommand) {
    const applicant = await this.applicantRepository.findById(command.id)

    assert.ok(applicant, new ApplicantNotFoundException({ applicantId: command.id }))
    assert.ok(applicant.idDocument, new IdDocumentEmptyValueException())
    assert.ok(applicant.addressDocuments, new AddressDocumentsEmptyValueException())

    const frontSideResponse = await firstValueFrom(
      this.client.listFiles({
        query: {
          id: {
            eq: {
              value: applicant?.idDocument?.frontSideId || '',
            },
          },
        },
      })
    )

    const backSideResponse = await firstValueFrom(
      this.client.listFiles({
        query: {
          id: {
            eq: {
              value: applicant?.idDocument?.backSideId || '',
            },
          },
        },
      })
    )

    const addressDocumentsResponse = await firstValueFrom(
      this.client.listFiles({
        query: {
          id: {
            in: {
              values: applicant?.addressDocuments?.map((doc) => doc.fileId) || [],
            },
          },
        },
      })
    )

    const { id: applicantId } = await this.sumsubService.createApplicant({
      externalUserId: applicant.id,
      fixedInfo: {
        firstName: applicant.firstName,
        lastName: applicant.lastName,
        middleName: applicant.middleName,
        nationality: applicant.nationality,
        dob: applicant.dateOfBirth,
      },
      info: {
        country: applicant.countryOfResidence,
        addresses: [
          {
            country: applicant.countryOfResidence,
            postCode: applicant.postalCode,
            street: applicant.street,
            buildingNumber: applicant.apartmentOrHouse,
          },
        ],
      },
    })

    await applicant.addSumsubId(applicantId)

    if (frontSideResponse.files.length > 0) {
      const response = await fetch(frontSideResponse.files[0].url)

      const file = await response.arrayBuffer()

      await this.sumsubService.addIdDocument(applicantId, file, {
        idDocType: applicant.idDocument.type,
        idDocSubType: 'FRONT_SIDE',
        country: applicant.countryOfResidence,
        firstName: applicant.firstName,
        lastName: applicant.lastName,
        dob: applicant.dateOfBirth,
        placeOfBirth: applicant.countryOfBirth,
      })
    }

    if (backSideResponse.files.length > 0) {
      const response = await fetch(backSideResponse.files[0].url)

      const file = await response.arrayBuffer()

      await this.sumsubService.addIdDocument(applicantId, file, {
        idDocType: applicant.idDocument.type,
        idDocSubType: 'BACK_SIDE',
        country: applicant.countryOfResidence,
        firstName: applicant.firstName,
        lastName: applicant.lastName,
        dob: applicant.dateOfBirth,
        placeOfBirth: applicant.countryOfBirth,
      })
    }

    for (const addressDocument of addressDocumentsResponse.files) {
      const response = await fetch(addressDocument.url)

      const file = await response.arrayBuffer()

      await this.sumsubService.addIdDocument(applicantId, file, {
        idDocType: 'UTILITY_BILL',
        country: applicant.countryOfResidence,
        firstName: applicant.firstName,
        lastName: applicant.lastName,
        dob: applicant.dateOfBirth,
        placeOfBirth: applicant.countryOfBirth,
      })
    }

    await this.applicantRepository.save(applicant)
  }
}
