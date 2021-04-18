import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestUpdateWithoutApplicationIdInput } from "../inputs/LogRequestUpdateWithoutApplicationIdInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpdateWithWhereUniqueWithoutApplicationIdInput {
  @TypeGraphQL.Field(_type => LogRequestWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => LogRequestUpdateWithoutApplicationIdInput, {
    nullable: false
  })
  data!: LogRequestUpdateWithoutApplicationIdInput;
}
