import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateOrConnectWithoutClientInput } from "../inputs/LogRequestCreateOrConnectWithoutClientInput";
import { LogRequestCreateWithoutClientInput } from "../inputs/LogRequestCreateWithoutClientInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestCreateNestedManyWithoutClientInput {
  @TypeGraphQL.Field(_type => [LogRequestCreateWithoutClientInput], {
    nullable: true
  })
  create?: LogRequestCreateWithoutClientInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestCreateOrConnectWithoutClientInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestCreateOrConnectWithoutClientInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestWhereUniqueInput], {
    nullable: true
  })
  connect?: LogRequestWhereUniqueInput[] | undefined;
}
