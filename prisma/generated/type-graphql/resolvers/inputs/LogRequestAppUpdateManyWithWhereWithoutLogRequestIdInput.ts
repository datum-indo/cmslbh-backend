import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestAppScalarWhereInput } from "../inputs/LogRequestAppScalarWhereInput";
import { LogRequestAppUpdateManyMutationInput } from "../inputs/LogRequestAppUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestAppUpdateManyWithWhereWithoutLogRequestIdInput {
  @TypeGraphQL.Field(_type => LogRequestAppScalarWhereInput, {
    nullable: false
  })
  where!: LogRequestAppScalarWhereInput;

  @TypeGraphQL.Field(_type => LogRequestAppUpdateManyMutationInput, {
    nullable: false
  })
  data!: LogRequestAppUpdateManyMutationInput;
}
