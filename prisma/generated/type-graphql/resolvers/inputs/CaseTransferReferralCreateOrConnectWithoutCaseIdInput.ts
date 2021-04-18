import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferReferralCreateWithoutCaseIdInput } from "../inputs/CaseTransferReferralCreateWithoutCaseIdInput";
import { CaseTransferReferralWhereUniqueInput } from "../inputs/CaseTransferReferralWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferReferralCreateOrConnectWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseTransferReferralWhereUniqueInput, {
    nullable: false
  })
  where!: CaseTransferReferralWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseTransferReferralCreateWithoutCaseIdInput, {
    nullable: false
  })
  create!: CaseTransferReferralCreateWithoutCaseIdInput;
}
