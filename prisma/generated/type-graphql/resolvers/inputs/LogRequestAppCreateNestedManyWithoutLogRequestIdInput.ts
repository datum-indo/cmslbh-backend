import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestAppCreateOrConnectWithoutLogRequestIdInput } from "../inputs/LogRequestAppCreateOrConnectWithoutLogRequestIdInput";
import { LogRequestAppCreateWithoutLogRequestIdInput } from "../inputs/LogRequestAppCreateWithoutLogRequestIdInput";
import { LogRequestAppWhereUniqueInput } from "../inputs/LogRequestAppWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestAppCreateNestedManyWithoutLogRequestIdInput {
  @TypeGraphQL.Field(_type => [LogRequestAppCreateWithoutLogRequestIdInput], {
    nullable: true
  })
  create?: LogRequestAppCreateWithoutLogRequestIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppCreateOrConnectWithoutLogRequestIdInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestAppCreateOrConnectWithoutLogRequestIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestAppWhereUniqueInput], {
    nullable: true
  })
  connect?: LogRequestAppWhereUniqueInput[] | undefined;
}
