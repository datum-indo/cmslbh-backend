import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateWithoutApplicationIdInput } from "../inputs/LogRequestCreateWithoutApplicationIdInput";
import { LogRequestUpdateWithoutApplicationIdInput } from "../inputs/LogRequestUpdateWithoutApplicationIdInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpsertWithWhereUniqueWithoutApplicationIdInput {
  @TypeGraphQL.Field(_type => LogRequestWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => LogRequestUpdateWithoutApplicationIdInput, {
    nullable: false
  })
  update!: LogRequestUpdateWithoutApplicationIdInput;

  @TypeGraphQL.Field(_type => LogRequestCreateWithoutApplicationIdInput, {
    nullable: false
  })
  create!: LogRequestCreateWithoutApplicationIdInput;
}
