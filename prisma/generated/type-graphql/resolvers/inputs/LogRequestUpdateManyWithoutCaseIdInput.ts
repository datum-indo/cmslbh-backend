import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateOrConnectWithoutCaseIdInput } from "../inputs/LogRequestCreateOrConnectWithoutCaseIdInput";
import { LogRequestCreateWithoutCaseIdInput } from "../inputs/LogRequestCreateWithoutCaseIdInput";
import { LogRequestScalarWhereInput } from "../inputs/LogRequestScalarWhereInput";
import { LogRequestUpdateManyWithWhereWithoutCaseIdInput } from "../inputs/LogRequestUpdateManyWithWhereWithoutCaseIdInput";
import { LogRequestUpdateWithWhereUniqueWithoutCaseIdInput } from "../inputs/LogRequestUpdateWithWhereUniqueWithoutCaseIdInput";
import { LogRequestUpsertWithWhereUniqueWithoutCaseIdInput } from "../inputs/LogRequestUpsertWithWhereUniqueWithoutCaseIdInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpdateManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [LogRequestCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: LogRequestCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestUpsertWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  upsert?: LogRequestUpsertWithWhereUniqueWithoutCaseIdInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [LogRequestUpdateWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  update?: LogRequestUpdateWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestUpdateManyWithWhereWithoutCaseIdInput], {
    nullable: true
  })
  updateMany?: LogRequestUpdateManyWithWhereWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LogRequestScalarWhereInput[] | undefined;
}
