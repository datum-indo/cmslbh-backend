import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateOrConnectWithoutPersonIdInput } from "../inputs/LogRequestCreateOrConnectWithoutPersonIdInput";
import { LogRequestCreateWithoutPersonIdInput } from "../inputs/LogRequestCreateWithoutPersonIdInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestCreateNestedManyWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => [LogRequestCreateWithoutPersonIdInput], {
    nullable: true
  })
  create?: LogRequestCreateWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestCreateOrConnectWithoutPersonIdInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestCreateOrConnectWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestWhereUniqueInput], {
    nullable: true
  })
  connect?: LogRequestWhereUniqueInput[] | undefined;
}
