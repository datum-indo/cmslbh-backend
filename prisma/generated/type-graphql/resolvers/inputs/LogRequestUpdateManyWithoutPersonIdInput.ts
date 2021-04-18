import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateOrConnectWithoutPersonIdInput } from "../inputs/LogRequestCreateOrConnectWithoutPersonIdInput";
import { LogRequestCreateWithoutPersonIdInput } from "../inputs/LogRequestCreateWithoutPersonIdInput";
import { LogRequestScalarWhereInput } from "../inputs/LogRequestScalarWhereInput";
import { LogRequestUpdateManyWithWhereWithoutPersonIdInput } from "../inputs/LogRequestUpdateManyWithWhereWithoutPersonIdInput";
import { LogRequestUpdateWithWhereUniqueWithoutPersonIdInput } from "../inputs/LogRequestUpdateWithWhereUniqueWithoutPersonIdInput";
import { LogRequestUpsertWithWhereUniqueWithoutPersonIdInput } from "../inputs/LogRequestUpsertWithWhereUniqueWithoutPersonIdInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpdateManyWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => [LogRequestCreateWithoutPersonIdInput], {
    nullable: true
  })
  create?: LogRequestCreateWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestCreateOrConnectWithoutPersonIdInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestCreateOrConnectWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestUpsertWithWhereUniqueWithoutPersonIdInput], {
    nullable: true
  })
  upsert?: LogRequestUpsertWithWhereUniqueWithoutPersonIdInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [LogRequestUpdateWithWhereUniqueWithoutPersonIdInput], {
    nullable: true
  })
  update?: LogRequestUpdateWithWhereUniqueWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestUpdateManyWithWhereWithoutPersonIdInput], {
    nullable: true
  })
  updateMany?: LogRequestUpdateManyWithWhereWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LogRequestScalarWhereInput[] | undefined;
}
