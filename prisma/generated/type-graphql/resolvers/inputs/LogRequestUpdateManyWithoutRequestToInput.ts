import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateOrConnectWithoutRequestToInput } from "../inputs/LogRequestCreateOrConnectWithoutRequestToInput";
import { LogRequestCreateWithoutRequestToInput } from "../inputs/LogRequestCreateWithoutRequestToInput";
import { LogRequestScalarWhereInput } from "../inputs/LogRequestScalarWhereInput";
import { LogRequestUpdateManyWithWhereWithoutRequestToInput } from "../inputs/LogRequestUpdateManyWithWhereWithoutRequestToInput";
import { LogRequestUpdateWithWhereUniqueWithoutRequestToInput } from "../inputs/LogRequestUpdateWithWhereUniqueWithoutRequestToInput";
import { LogRequestUpsertWithWhereUniqueWithoutRequestToInput } from "../inputs/LogRequestUpsertWithWhereUniqueWithoutRequestToInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpdateManyWithoutRequestToInput {
  @TypeGraphQL.Field(_type => [LogRequestCreateWithoutRequestToInput], {
    nullable: true
  })
  create?: LogRequestCreateWithoutRequestToInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestCreateOrConnectWithoutRequestToInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestCreateOrConnectWithoutRequestToInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestUpsertWithWhereUniqueWithoutRequestToInput], {
    nullable: true
  })
  upsert?: LogRequestUpsertWithWhereUniqueWithoutRequestToInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [LogRequestUpdateWithWhereUniqueWithoutRequestToInput], {
    nullable: true
  })
  update?: LogRequestUpdateWithWhereUniqueWithoutRequestToInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestUpdateManyWithWhereWithoutRequestToInput], {
    nullable: true
  })
  updateMany?: LogRequestUpdateManyWithWhereWithoutRequestToInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LogRequestScalarWhereInput[] | undefined;
}
