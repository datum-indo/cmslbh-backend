import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseReferralCreateWithoutClientInput } from "../inputs/CaseReferralCreateWithoutClientInput";
import { CaseReferralUpdateWithoutClientInput } from "../inputs/CaseReferralUpdateWithoutClientInput";
import { CaseReferralWhereUniqueInput } from "../inputs/CaseReferralWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseReferralUpsertWithWhereUniqueWithoutClientInput {
  @TypeGraphQL.Field(_type => CaseReferralWhereUniqueInput, {
    nullable: false
  })
  where!: CaseReferralWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseReferralUpdateWithoutClientInput, {
    nullable: false
  })
  update!: CaseReferralUpdateWithoutClientInput;

  @TypeGraphQL.Field(_type => CaseReferralCreateWithoutClientInput, {
    nullable: false
  })
  create!: CaseReferralCreateWithoutClientInput;
}
