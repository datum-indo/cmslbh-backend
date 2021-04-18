import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateOrConnectWithoutApplicationIdInput } from "../inputs/LogRequestCreateOrConnectWithoutApplicationIdInput";
import { LogRequestCreateWithoutApplicationIdInput } from "../inputs/LogRequestCreateWithoutApplicationIdInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestCreateNestedManyWithoutApplicationIdInput {
  @TypeGraphQL.Field(_type => [LogRequestCreateWithoutApplicationIdInput], {
    nullable: true
  })
  create?: LogRequestCreateWithoutApplicationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestCreateOrConnectWithoutApplicationIdInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestCreateOrConnectWithoutApplicationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestWhereUniqueInput], {
    nullable: true
  })
  connect?: LogRequestWhereUniqueInput[] | undefined;
}
