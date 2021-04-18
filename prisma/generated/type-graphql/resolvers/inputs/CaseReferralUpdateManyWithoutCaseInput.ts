import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseReferralCreateOrConnectWithoutCaseInput } from "../inputs/CaseReferralCreateOrConnectWithoutCaseInput";
import { CaseReferralCreateWithoutCaseInput } from "../inputs/CaseReferralCreateWithoutCaseInput";
import { CaseReferralScalarWhereInput } from "../inputs/CaseReferralScalarWhereInput";
import { CaseReferralUpdateManyWithWhereWithoutCaseInput } from "../inputs/CaseReferralUpdateManyWithWhereWithoutCaseInput";
import { CaseReferralUpdateWithWhereUniqueWithoutCaseInput } from "../inputs/CaseReferralUpdateWithWhereUniqueWithoutCaseInput";
import { CaseReferralUpsertWithWhereUniqueWithoutCaseInput } from "../inputs/CaseReferralUpsertWithWhereUniqueWithoutCaseInput";
import { CaseReferralWhereUniqueInput } from "../inputs/CaseReferralWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseReferralUpdateManyWithoutCaseInput {
  @TypeGraphQL.Field(_type => [CaseReferralCreateWithoutCaseInput], {
    nullable: true
  })
  create?: CaseReferralCreateWithoutCaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralCreateOrConnectWithoutCaseInput], {
    nullable: true
  })
  connectOrCreate?: CaseReferralCreateOrConnectWithoutCaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralUpsertWithWhereUniqueWithoutCaseInput], {
    nullable: true
  })
  upsert?: CaseReferralUpsertWithWhereUniqueWithoutCaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseReferralWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralWhereUniqueInput], {
    nullable: true
  })
  set?: CaseReferralWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseReferralWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseReferralWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralUpdateWithWhereUniqueWithoutCaseInput], {
    nullable: true
  })
  update?: CaseReferralUpdateWithWhereUniqueWithoutCaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralUpdateManyWithWhereWithoutCaseInput], {
    nullable: true
  })
  updateMany?: CaseReferralUpdateManyWithWhereWithoutCaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseReferralScalarWhereInput[] | undefined;
}
