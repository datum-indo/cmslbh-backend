import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferReferralCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseTransferReferralCreateOrConnectWithoutCaseIdInput";
import { CaseTransferReferralCreateWithoutCaseIdInput } from "../inputs/CaseTransferReferralCreateWithoutCaseIdInput";
import { CaseTransferReferralWhereUniqueInput } from "../inputs/CaseTransferReferralWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferReferralCreateNestedManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseTransferReferralCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseTransferReferralCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferReferralCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseTransferReferralCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferReferralWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseTransferReferralWhereUniqueInput[] | undefined;
}
