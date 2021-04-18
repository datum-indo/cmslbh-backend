import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateWithoutClientInput } from "../inputs/LogRequestCreateWithoutClientInput";
import { LogRequestUpdateWithoutClientInput } from "../inputs/LogRequestUpdateWithoutClientInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpsertWithWhereUniqueWithoutClientInput {
  @TypeGraphQL.Field(_type => LogRequestWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => LogRequestUpdateWithoutClientInput, {
    nullable: false
  })
  update!: LogRequestUpdateWithoutClientInput;

  @TypeGraphQL.Field(_type => LogRequestCreateWithoutClientInput, {
    nullable: false
  })
  create!: LogRequestCreateWithoutClientInput;
}
