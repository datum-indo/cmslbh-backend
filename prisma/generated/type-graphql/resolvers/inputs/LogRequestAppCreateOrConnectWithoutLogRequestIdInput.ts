import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestAppCreateWithoutLogRequestIdInput } from "../inputs/LogRequestAppCreateWithoutLogRequestIdInput";
import { LogRequestAppWhereUniqueInput } from "../inputs/LogRequestAppWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestAppCreateOrConnectWithoutLogRequestIdInput {
  @TypeGraphQL.Field(_type => LogRequestAppWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestAppWhereUniqueInput;

  @TypeGraphQL.Field(_type => LogRequestAppCreateWithoutLogRequestIdInput, {
    nullable: false
  })
  create!: LogRequestAppCreateWithoutLogRequestIdInput;
}
