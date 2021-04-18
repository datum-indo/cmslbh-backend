import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateOrConnectWithoutNetworkIdInput } from "../inputs/LogRequestCreateOrConnectWithoutNetworkIdInput";
import { LogRequestCreateWithoutNetworkIdInput } from "../inputs/LogRequestCreateWithoutNetworkIdInput";
import { LogRequestScalarWhereInput } from "../inputs/LogRequestScalarWhereInput";
import { LogRequestUpdateManyWithWhereWithoutNetworkIdInput } from "../inputs/LogRequestUpdateManyWithWhereWithoutNetworkIdInput";
import { LogRequestUpdateWithWhereUniqueWithoutNetworkIdInput } from "../inputs/LogRequestUpdateWithWhereUniqueWithoutNetworkIdInput";
import { LogRequestUpsertWithWhereUniqueWithoutNetworkIdInput } from "../inputs/LogRequestUpsertWithWhereUniqueWithoutNetworkIdInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpdateManyWithoutNetworkIdInput {
  @TypeGraphQL.Field(_type => [LogRequestCreateWithoutNetworkIdInput], {
    nullable: true
  })
  create?: LogRequestCreateWithoutNetworkIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestCreateOrConnectWithoutNetworkIdInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestCreateOrConnectWithoutNetworkIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestUpsertWithWhereUniqueWithoutNetworkIdInput], {
    nullable: true
  })
  upsert?: LogRequestUpsertWithWhereUniqueWithoutNetworkIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestWhereUniqueInput], {
    nullable: true
  })
  connect?: LogRequestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestWhereUniqueInput], {
    nullable: true
  })
  set?: LogRequestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LogRequestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestWhereUniqueInput], {
    nullable: true
  })
  delete?: LogRequestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestUpdateWithWhereUniqueWithoutNetworkIdInput], {
    nullable: true
  })
  update?: LogRequestUpdateWithWhereUniqueWithoutNetworkIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestUpdateManyWithWhereWithoutNetworkIdInput], {
    nullable: true
  })
  updateMany?: LogRequestUpdateManyWithWhereWithoutNetworkIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LogRequestScalarWhereInput[] | undefined;
}
