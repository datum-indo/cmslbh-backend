import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateWithoutPpInput } from "../inputs/LogRequestCreateWithoutPpInput";
import { LogRequestUpdateWithoutPpInput } from "../inputs/LogRequestUpdateWithoutPpInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpsertWithoutPpInput {
  @TypeGraphQL.Field(_type => LogRequestUpdateWithoutPpInput, {
    nullable: false
  })
  update!: LogRequestUpdateWithoutPpInput;

  @TypeGraphQL.Field(_type => LogRequestCreateWithoutPpInput, {
    nullable: false
  })
  create!: LogRequestCreateWithoutPpInput;
}
