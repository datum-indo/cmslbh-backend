import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestAppCreateOrConnectWithoutLogRequestIdInput } from "../inputs/LogRequestAppCreateOrConnectWithoutLogRequestIdInput";
import { LogRequestAppCreateWithoutLogRequestIdInput } from "../inputs/LogRequestAppCreateWithoutLogRequestIdInput";
import { LogRequestAppScalarWhereInput } from "../inputs/LogRequestAppScalarWhereInput";
import { LogRequestAppUpdateManyWithWhereWithoutLogRequestIdInput } from "../inputs/LogRequestAppUpdateManyWithWhereWithoutLogRequestIdInput";
import { LogRequestAppUpdateWithWhereUniqueWithoutLogRequestIdInput } from "../inputs/LogRequestAppUpdateWithWhereUniqueWithoutLogRequestIdInput";
import { LogRequestAppUpsertWithWhereUniqueWithoutLogRequestIdInput } from "../inputs/LogRequestAppUpsertWithWhereUniqueWithoutLogRequestIdInput";
import { LogRequestAppWhereUniqueInput } from "../inputs/LogRequestAppWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestAppUpdateManyWithoutLogRequestIdInput {
  @TypeGraphQL.Field(_type => [LogRequestAppCreateWithoutLogRequestIdInput], {
    nullable: true
  })
  create?: LogRequestAppCreateWithoutLogRequestIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppCreateOrConnectWithoutLogRequestIdInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestAppCreateOrConnectWithoutLogRequestIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppUpsertWithWhereUniqueWithoutLogRequestIdInput], {
    nullable: true
  })
  upsert?: LogRequestAppUpsertWithWhereUniqueWithoutLogRequestIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppWhereUniqueInput], {
    nullable: true
  })
  connect?: LogRequestAppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppWhereUniqueInput], {
    nullable: true
  })
  set?: LogRequestAppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LogRequestAppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppWhereUniqueInput], {
    nullable: true
  })
  delete?: LogRequestAppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppUpdateWithWhereUniqueWithoutLogRequestIdInput], {
    nullable: true
  })
  update?: LogRequestAppUpdateWithWhereUniqueWithoutLogRequestIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppUpdateManyWithWhereWithoutLogRequestIdInput], {
    nullable: true
  })
  updateMany?: LogRequestAppUpdateManyWithWhereWithoutLogRequestIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LogRequestAppScalarWhereInput[] | undefined;
}
