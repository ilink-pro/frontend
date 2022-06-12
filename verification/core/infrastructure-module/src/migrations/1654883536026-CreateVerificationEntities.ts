import { MigrationInterface } from 'typeorm'
import { QueryRunner }        from 'typeorm'

export class CreateVerificationEntities1654883536026 implements MigrationInterface {
  name = 'CreateVerificationEntities1654883536026'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "address_document_entity" ("id" uuid NOT NULL, "fileId" character varying NOT NULL, "applicantId" uuid, CONSTRAINT "PK_7d6c3adaa6b046d487e27901e84" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TYPE "public"."id_document_entity_type_enum" AS ENUM('PASSPORT', 'ID_CARD', 'RESIDENCE_PERMIT')`
    )
    await queryRunner.query(
      `CREATE TABLE "id_document_entity" ("id" uuid NOT NULL, "type" "public"."id_document_entity_type_enum" NOT NULL DEFAULT 'PASSPORT', "frontSideId" character varying NOT NULL, "backSideId" character varying NOT NULL, CONSTRAINT "PK_e50fc9dcc3eeeb458bcf67f66ae" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "applicant_entity" ("id" uuid NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "middleName" character varying, "dateOfBirth" character varying, "nationality" character varying, "countryOfBirth" character varying, "countryOfResidence" character varying, "reasonsForOpeningAnAccount" character varying, "accountWillBeUsedFor" character varying, "city" character varying, "street" character varying, "apartmentOrHouse" character varying, "postalCode" character varying, "sumsubId" character varying, "idDocumentId" uuid, CONSTRAINT "REL_698f2819e0cda7471058ec7580" UNIQUE ("idDocumentId"), CONSTRAINT "PK_ed168e8c647fd058874558378fb" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `ALTER TABLE "address_document_entity" ADD CONSTRAINT "FK_e075d39900427d64416de8e1a8e" FOREIGN KEY ("applicantId") REFERENCES "applicant_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "applicant_entity" ADD CONSTRAINT "FK_698f2819e0cda7471058ec75805" FOREIGN KEY ("idDocumentId") REFERENCES "id_document_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "applicant_entity" DROP CONSTRAINT "FK_698f2819e0cda7471058ec75805"`
    )
    await queryRunner.query(
      `ALTER TABLE "address_document_entity" DROP CONSTRAINT "FK_e075d39900427d64416de8e1a8e"`
    )
    await queryRunner.query(`DROP TABLE "applicant_entity"`)
    await queryRunner.query(`DROP TABLE "id_document_entity"`)
    await queryRunner.query(`DROP TYPE "public"."id_document_entity_type_enum"`)
    await queryRunner.query(`DROP TABLE "address_document_entity"`)
  }
}
