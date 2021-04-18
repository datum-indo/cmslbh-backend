import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesTypeCreateNestedOneWithoutRoleInput } from "../inputs/RolesTypeCreateNestedOneWithoutRoleInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoleCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => RolesTypeCreateNestedOneWithoutRoleInput, {
    nullable: true
  })
  type?: RolesTypeCreateNestedOneWithoutRoleInput | undefined;
}
