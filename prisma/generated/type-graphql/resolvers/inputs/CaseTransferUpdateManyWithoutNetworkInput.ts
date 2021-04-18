import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferCreateOrConnectWithoutNetworkInput } from "../inputs/CaseTransferCreateOrConnectWithoutNetworkInput";
import { CaseTransferCreateWithoutNetworkInput } from "../inputs/CaseTransferCreateWithoutNetworkInput";
import { CaseTransferScalarWhereInput } from "../inputs/CaseTransferScalarWhereInput";
import { CaseTransferUpdateManyWithWhereWithoutNetworkInput } from "../inputs/CaseTransferUpdateManyWithWhereWithoutNetworkInput";
import { CaseTransferUpdateWithWhereUniqueWithoutNetworkInput } from "../inputs/CaseTransferUpdateWithWhereUniqueWithoutNetworkInput";
import { CaseTransferUpsertWithWhereUniqueWithoutNetworkInput } from "../inputs/CaseTransferUpsertWithWhereUniqueWithoutNetworkInput";
import { CaseTransferWhereUniqueInput } from "../inputs/CaseTransferWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferUpdateManyWithoutNetworkInput {
  @TypeGraphQL.Field(_type => [CaseTransferCreateWithoutNetworkInput], {
    nullable: true
  })
  create?: CaseTransferCreateWithoutNetworkInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferCreateOrConnectWithoutNetworkInput], {
    nullable: true
  })
  connectOrCreate?: CaseTransferCreateOrConnectWithoutNetworkInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferUpsertWithWhereUniqueWithoutNetworkInput], {
    nullable: true
  })
  upsert?: CaseTransferUpsertWithWhereUniqueWithoutNetworkInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseTransferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferWhereUniqueInput], {
    nullable: true
  })
  set?: CaseTransferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseTransferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseTransferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferUpdateWithWhereUniqueWithoutNetworkInput], {
    nullable: true
  })
  update?: CaseTransferUpdateWithWhereUniqueWithoutNetworkInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferUpdateManyWithWhereWithoutNetworkInput], {
    nullable: true
  })
  updateMany?: CaseTransferUpdateManyWithWhereWithoutNetworkInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseTransferScalarWhereInput[] | undefined;
}
