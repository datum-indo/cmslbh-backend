import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseReferralCreateOrConnectWithoutClientInput } from "../inputs/CaseReferralCreateOrConnectWithoutClientInput";
import { CaseReferralCreateWithoutClientInput } from "../inputs/CaseReferralCreateWithoutClientInput";
import { CaseReferralScalarWhereInput } from "../inputs/CaseReferralScalarWhereInput";
import { CaseReferralUpdateManyWithWhereWithoutClientInput } from "../inputs/CaseReferralUpdateManyWithWhereWithoutClientInput";
import { CaseReferralUpdateWithWhereUniqueWithoutClientInput } from "../inputs/CaseReferralUpdateWithWhereUniqueWithoutClientInput";
import { CaseReferralUpsertWithWhereUniqueWithoutClientInput } from "../inputs/CaseReferralUpsertWithWhereUniqueWithoutClientInput";
import { CaseReferralWhereUniqueInput } from "../inputs/CaseReferralWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseReferralUpdateManyWithoutClientInput {
  @TypeGraphQL.Field(_type => [CaseReferralCreateWithoutClientInput], {
    nullable: true
  })
  create?: CaseReferralCreateWithoutClientInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralCreateOrConnectWithoutClientInput], {
    nullable: true
  })
  connectOrCreate?: CaseReferralCreateOrConnectWithoutClientInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralUpsertWithWhereUniqueWithoutClientInput], {
    nullable: true
  })
  upsert?: CaseReferralUpsertWithWhereUniqueWithoutClientInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [CaseReferralUpdateWithWhereUniqueWithoutClientInput], {
    nullable: true
  })
  update?: CaseReferralUpdateWithWhereUniqueWithoutClientInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralUpdateManyWithWhereWithoutClientInput], {
    nullable: true
  })
  updateMany?: CaseReferralUpdateManyWithWhereWithoutClientInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseReferralScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseReferralScalarWhereInput[] | undefined;
}
