import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutCaseReferralInput } from "../inputs/PersonCreateWithoutCaseReferralInput";
import { PersonUpdateWithoutCaseReferralInput } from "../inputs/PersonUpdateWithoutCaseReferralInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpsertWithoutCaseReferralInput {
  @TypeGraphQL.Field(_type => PersonUpdateWithoutCaseReferralInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutCaseReferralInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutCaseReferralInput, {
    nullable: false
  })
  create!: PersonCreateWithoutCaseReferralInput;
}
