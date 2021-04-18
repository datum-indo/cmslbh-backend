import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { RolesTypeUpdateOneWithoutRoleInput } from "../inputs/RolesTypeUpdateOneWithoutRoleInput";
import { UserUpdateManyWithoutRoles_typeInput } from "../inputs/UserUpdateManyWithoutRoles_typeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoleUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RolesTypeUpdateOneWithoutRoleInput, {
    nullable: true
  })
  type?: RolesTypeUpdateOneWithoutRoleInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutRoles_typeInput, {
    nullable: true
  })
  User?: UserUpdateManyWithoutRoles_typeInput | undefined;
}
