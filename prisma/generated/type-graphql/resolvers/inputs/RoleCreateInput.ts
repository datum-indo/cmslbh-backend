import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesTypeCreateNestedOneWithoutRoleInput } from "../inputs/RolesTypeCreateNestedOneWithoutRoleInput";
import { UserCreateNestedManyWithoutRoles_typeInput } from "../inputs/UserCreateNestedManyWithoutRoles_typeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoleCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => RolesTypeCreateNestedOneWithoutRoleInput, {
    nullable: true
  })
  type?: RolesTypeCreateNestedOneWithoutRoleInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutRoles_typeInput, {
    nullable: true
  })
  User?: UserCreateNestedManyWithoutRoles_typeInput | undefined;
}
