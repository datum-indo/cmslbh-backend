import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateOrConnectWithoutClientInput } from "../inputs/LogRequestCreateOrConnectWithoutClientInput";
import { LogRequestCreateWithoutClientInput } from "../inputs/LogRequestCreateWithoutClientInput";
import { LogRequestScalarWhereInput } from "../inputs/LogRequestScalarWhereInput";
import { LogRequestUpdateManyWithWhereWithoutClientInput } from "../inputs/LogRequestUpdateManyWithWhereWithoutClientInput";
import { LogRequestUpdateWithWhereUniqueWithoutClientInput } from "../inputs/LogRequestUpdateWithWhereUniqueWithoutClientInput";
import { LogRequestUpsertWithWhereUniqueWithoutClientInput } from "../inputs/LogRequestUpsertWithWhereUniqueWithoutClientInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpdateManyWithoutClientInput {
  @TypeGraphQL.Field(_type => [LogRequestCreateWithoutClientInput], {
    nullable: true
  })
  create?: LogRequestCreateWithoutClientInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestCreateOrConnectWithoutClientInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestCreateOrConnectWithoutClientInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestUpsertWithWhereUniqueWithoutClientInput], {
    nullable: true
  })
  upsert?: LogRequestUpsertWithWhereUniqueWithoutClientInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [LogRequestUpdateWithWhereUniqueWithoutClientInput], {
    nullable: true
  })
  update?: LogRequestUpdateWithWhereUniqueWithoutClientInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestUpdateManyWithWhereWithoutClientInput], {
    nullable: true
  })
  updateMany?: LogRequestUpdateManyWithWhereWithoutClientInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LogRequestScalarWhereInput[] | undefined;
}
