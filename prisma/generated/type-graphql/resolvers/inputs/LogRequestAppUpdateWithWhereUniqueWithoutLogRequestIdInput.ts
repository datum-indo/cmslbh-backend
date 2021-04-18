import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestAppUpdateWithoutLogRequestIdInput } from "../inputs/LogRequestAppUpdateWithoutLogRequestIdInput";
import { LogRequestAppWhereUniqueInput } from "../inputs/LogRequestAppWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestAppUpdateWithWhereUniqueWithoutLogRequestIdInput {
  @TypeGraphQL.Field(_type => LogRequestAppWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestAppWhereUniqueInput;

  @TypeGraphQL.Field(_type => LogRequestAppUpdateWithoutLogRequestIdInput, {
    nullable: false
  })
  data!: LogRequestAppUpdateWithoutLogRequestIdInput;
}
