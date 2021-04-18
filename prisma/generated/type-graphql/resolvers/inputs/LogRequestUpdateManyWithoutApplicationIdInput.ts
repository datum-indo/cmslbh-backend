import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateOrConnectWithoutApplicationIdInput } from "../inputs/LogRequestCreateOrConnectWithoutApplicationIdInput";
import { LogRequestCreateWithoutApplicationIdInput } from "../inputs/LogRequestCreateWithoutApplicationIdInput";
import { LogRequestScalarWhereInput } from "../inputs/LogRequestScalarWhereInput";
import { LogRequestUpdateManyWithWhereWithoutApplicationIdInput } from "../inputs/LogRequestUpdateManyWithWhereWithoutApplicationIdInput";
import { LogRequestUpdateWithWhereUniqueWithoutApplicationIdInput } from "../inputs/LogRequestUpdateWithWhereUniqueWithoutApplicationIdInput";
import { LogRequestUpsertWithWhereUniqueWithoutApplicationIdInput } from "../inputs/LogRequestUpsertWithWhereUniqueWithoutApplicationIdInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpdateManyWithoutApplicationIdInput {
  @TypeGraphQL.Field(_type => [LogRequestCreateWithoutApplicationIdInput], {
    nullable: true
  })
  create?: LogRequestCreateWithoutApplicationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestCreateOrConnectWithoutApplicationIdInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestCreateOrConnectWithoutApplicationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestUpsertWithWhereUniqueWithoutApplicationIdInput], {
    nullable: true
  })
  upsert?: LogRequestUpsertWithWhereUniqueWithoutApplicationIdInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [LogRequestUpdateWithWhereUniqueWithoutApplicationIdInput], {
    nullable: true
  })
  update?: LogRequestUpdateWithWhereUniqueWithoutApplicationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestUpdateManyWithWhereWithoutApplicationIdInput], {
    nullable: true
  })
  updateMany?: LogRequestUpdateManyWithWhereWithoutApplicationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LogRequestScalarWhereInput[] | undefined;
}
