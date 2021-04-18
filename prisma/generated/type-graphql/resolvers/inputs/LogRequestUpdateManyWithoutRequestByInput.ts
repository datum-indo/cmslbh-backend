import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateOrConnectWithoutRequestByInput } from "../inputs/LogRequestCreateOrConnectWithoutRequestByInput";
import { LogRequestCreateWithoutRequestByInput } from "../inputs/LogRequestCreateWithoutRequestByInput";
import { LogRequestScalarWhereInput } from "../inputs/LogRequestScalarWhereInput";
import { LogRequestUpdateManyWithWhereWithoutRequestByInput } from "../inputs/LogRequestUpdateManyWithWhereWithoutRequestByInput";
import { LogRequestUpdateWithWhereUniqueWithoutRequestByInput } from "../inputs/LogRequestUpdateWithWhereUniqueWithoutRequestByInput";
import { LogRequestUpsertWithWhereUniqueWithoutRequestByInput } from "../inputs/LogRequestUpsertWithWhereUniqueWithoutRequestByInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpdateManyWithoutRequestByInput {
  @TypeGraphQL.Field(_type => [LogRequestCreateWithoutRequestByInput], {
    nullable: true
  })
  create?: LogRequestCreateWithoutRequestByInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestCreateOrConnectWithoutRequestByInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestCreateOrConnectWithoutRequestByInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestUpsertWithWhereUniqueWithoutRequestByInput], {
    nullable: true
  })
  upsert?: LogRequestUpsertWithWhereUniqueWithoutRequestByInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [LogRequestUpdateWithWhereUniqueWithoutRequestByInput], {
    nullable: true
  })
  update?: LogRequestUpdateWithWhereUniqueWithoutRequestByInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestUpdateManyWithWhereWithoutRequestByInput], {
    nullable: true
  })
  updateMany?: LogRequestUpdateManyWithWhereWithoutRequestByInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LogRequestScalarWhereInput[] | undefined;
}
