import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferReferralCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseTransferReferralCreateOrConnectWithoutCaseIdInput";
import { CaseTransferReferralCreateWithoutCaseIdInput } from "../inputs/CaseTransferReferralCreateWithoutCaseIdInput";
import { CaseTransferReferralScalarWhereInput } from "../inputs/CaseTransferReferralScalarWhereInput";
import { CaseTransferReferralUpdateManyWithWhereWithoutCaseIdInput } from "../inputs/CaseTransferReferralUpdateManyWithWhereWithoutCaseIdInput";
import { CaseTransferReferralUpdateWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseTransferReferralUpdateWithWhereUniqueWithoutCaseIdInput";
import { CaseTransferReferralUpsertWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseTransferReferralUpsertWithWhereUniqueWithoutCaseIdInput";
import { CaseTransferReferralWhereUniqueInput } from "../inputs/CaseTransferReferralWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferReferralUpdateManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseTransferReferralCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseTransferReferralCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferReferralCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseTransferReferralCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferReferralUpsertWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  upsert?: CaseTransferReferralUpsertWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferReferralWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseTransferReferralWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferReferralWhereUniqueInput], {
    nullable: true
  })
  set?: CaseTransferReferralWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferReferralWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseTransferReferralWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferReferralWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseTransferReferralWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferReferralUpdateWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  update?: CaseTransferReferralUpdateWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferReferralUpdateManyWithWhereWithoutCaseIdInput], {
    nullable: true
  })
  updateMany?: CaseTransferReferralUpdateManyWithWhereWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferReferralScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseTransferReferralScalarWhereInput[] | undefined;
}
