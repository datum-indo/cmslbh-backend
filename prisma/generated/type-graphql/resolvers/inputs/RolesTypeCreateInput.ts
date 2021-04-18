import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateNestedManyWithoutTypeInput } from "../inputs/RoleCreateNestedManyWithoutTypeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesTypeCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => RoleCreateNestedManyWithoutTypeInput, {
    nullable: true
  })
  Role?: RoleCreateNestedManyWithoutTypeInput | undefined;
}
