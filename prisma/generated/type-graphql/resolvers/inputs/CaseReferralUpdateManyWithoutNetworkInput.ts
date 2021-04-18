import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseReferralCreateOrConnectWithoutNetworkInput } from "../inputs/CaseReferralCreateOrConnectWithoutNetworkInput";
import { CaseReferralCreateWithoutNetworkInput } from "../inputs/CaseReferralCreateWithoutNetworkInput";
import { CaseReferralScalarWhereInput } from "../inputs/CaseReferralScalarWhereInput";
import { CaseReferralUpdateManyWithWhereWithoutNetworkInput } from "../inputs/CaseReferralUpdateManyWithWhereWithoutNetworkInput";
import { CaseReferralUpdateWithWhereUniqueWithoutNetworkInput } from "../inputs/CaseReferralUpdateWithWhereUniqueWithoutNetworkInput";
import { CaseReferralUpsertWithWhereUniqueWithoutNetworkInput } from "../inputs/CaseReferralUpsertWithWhereUniqueWithoutNetworkInput";
import { CaseReferralWhereUniqueInput } from "../inputs/CaseReferralWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseReferralUpdateManyWithoutNetworkInput {
  @TypeGraphQL.Field(_type => [CaseReferralCreateWithoutNetworkInput], {
    nullable: true
  })
  create?: CaseReferralCreateWithoutNetworkInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralCreateOrConnectWithoutNetworkInput], {
    nullable: true
  })
  connectOrCreate?: CaseReferralCreateOrConnectWithoutNetworkInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralUpsertWithWhereUniqueWithoutNetworkInput], {
    nullable: true
  })
  upsert?: CaseReferralUpsertWithWhereUniqueWithoutNetworkInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [CaseReferralUpdateWithWhereUniqueWithoutNetworkInput], {
    nullable: true
  })
  update?: CaseReferralUpdateWithWhereUniqueWithoutNetworkInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralUpdateManyWithWhereWithoutNetworkInput], {
    nullable: true
  })
  updateMany?: CaseReferralUpdateManyWithWhereWithoutNetworkInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseReferralScalarWhereInput[] | undefined;
}
