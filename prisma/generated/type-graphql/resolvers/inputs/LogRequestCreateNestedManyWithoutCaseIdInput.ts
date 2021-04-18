import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateOrConnectWithoutCaseIdInput } from "../inputs/LogRequestCreateOrConnectWithoutCaseIdInput";
import { LogRequestCreateWithoutCaseIdInput } from "../inputs/LogRequestCreateWithoutCaseIdInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestCreateNestedManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [LogRequestCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: LogRequestCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: LogRequestCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [LogRequestWhereUniqueInput], {
    nullable: true
  })
  connect?: LogRequestWhereUniqueInput[] | undefined;
}
