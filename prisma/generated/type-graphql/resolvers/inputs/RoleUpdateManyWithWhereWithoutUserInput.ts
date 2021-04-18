import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleScalarWhereInput } from "../inputs/RoleScalarWhereInput";
import { RoleUpdateManyMutationInput } from "../inputs/RoleUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoleUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => RoleScalarWhereInput, {
    nullable: false
  })
  where!: RoleScalarWhereInput;

  @TypeGraphQL.Field(_type => RoleUpdateManyMutationInput, {
    nullable: false
  })
  data!: RoleUpdateManyMutationInput;
}
