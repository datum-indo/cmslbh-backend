import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestScalarWhereInput } from "../inputs/LogRequestScalarWhereInput";
import { LogRequestUpdateManyMutationInput } from "../inputs/LogRequestUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestUpdateManyWithWhereWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => LogRequestScalarWhereInput, {
    nullable: false
  })
  where!: LogRequestScalarWhereInput;

  @TypeGraphQL.Field(_type => LogRequestUpdateManyMutationInput, {
    nullable: false
  })
  data!: LogRequestUpdateManyMutationInput;
}
