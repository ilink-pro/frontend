/* eslint-disable max-classes-per-file */
import { Field }     from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
class EqualsCondition {
  @Field()
  value: string
}

@InputType()
class IncludesCondition {
  @Field()
  value: string
}

@InputType()
class IdQuery {
  @Field({ nullable: true })
  eq: EqualsCondition;

  @Field({ nullable: true })
  in: IncludesCondition
}

@InputType()
class UrlQuery {
  @Field({ nullable: true })
  eq: EqualsCondition;

  @Field({ nullable: true })
  in: IncludesCondition
}

@InputType()
export class GetFilesInput {
  @Field({ nullable: true })
  id?: IdQuery

  @Field({ nullable: true })
  url?: UrlQuery
}
