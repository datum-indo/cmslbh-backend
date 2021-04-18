import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferReferralCreateWithoutCaseIdInput } from "../inputs/CaseTransferReferralCreateWithoutCaseIdInput";
import { CaseTransferReferralUpdateWithoutCaseIdInput } from "../inputs/CaseTransferReferralUpdateWithoutCaseIdInput";
import { CaseTransferReferralWhereUniqueInput } from "../inputs/CaseTransferReferralWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferReferralUpsertWithWhereUniqueWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseTransferReferralWhereUniqueInput, {
    nullable: false
  })
  where!: CaseTransferReferralWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseTransferReferralUpdateWithoutCaseIdInput, {
    nullable: false
  })
  update!: CaseTransferReferralUpdateWithoutCaseIdInput;

  @TypeGraphQL.Field(_type => CaseTransferReferralCreateWithoutCaseIdInput, {
    nullable: false
  })
  create!: CaseTransferReferralCreateWithoutCaseIdInput;
}
