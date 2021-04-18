import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateWithoutPersonIdInput } from "../inputs/LogRequestCreateWithoutPersonIdInput";
import { LogRequestUpdateWithoutPersonIdInput } from "../inputs/LogRequestUpdateWithoutPersonIdInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpsertWithWhereUniqueWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => LogRequestWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => LogRequestUpdateWithoutPersonIdInput, {
    nullable: false
  })
  update!: LogRequestUpdateWithoutPersonIdInput;

  @TypeGraphQL.Field(_type => LogRequestCreateWithoutPersonIdInput, {
    nullable: false
  })
  create!: LogRequestCreateWithoutPersonIdInput;
}
