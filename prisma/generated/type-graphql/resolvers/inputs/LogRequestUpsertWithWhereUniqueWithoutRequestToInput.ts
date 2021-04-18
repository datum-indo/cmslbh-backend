import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateWithoutRequestToInput } from "../inputs/LogRequestCreateWithoutRequestToInput";
import { LogRequestUpdateWithoutRequestToInput } from "../inputs/LogRequestUpdateWithoutRequestToInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpsertWithWhereUniqueWithoutRequestToInput {
  @TypeGraphQL.Field(_type => LogRequestWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => LogRequestUpdateWithoutRequestToInput, {
    nullable: false
  })
  update!: LogRequestUpdateWithoutRequestToInput;

  @TypeGraphQL.Field(_type => LogRequestCreateWithoutRequestToInput, {
    nullable: false
  })
  create!: LogRequestCreateWithoutRequestToInput;
}
