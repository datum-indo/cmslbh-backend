import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestCreateWithoutRequestByInput } from "../inputs/LogRequestCreateWithoutRequestByInput";
import { LogRequestUpdateWithoutRequestByInput } from "../inputs/LogRequestUpdateWithoutRequestByInput";
import { LogRequestWhereUniqueInput } from "../inputs/LogRequestWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpsertWithWhereUniqueWithoutRequestByInput {
  @TypeGraphQL.Field(_type => LogRequestWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => LogRequestUpdateWithoutRequestByInput, {
    nullable: false
  })
  update!: LogRequestUpdateWithoutRequestByInput;

  @TypeGraphQL.Field(_type => LogRequestCreateWithoutRequestByInput, {
    nullable: false
  })
  create!: LogRequestCreateWithoutRequestByInput;
}
