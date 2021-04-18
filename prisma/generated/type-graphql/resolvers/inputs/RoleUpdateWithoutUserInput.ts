import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { RolesTypeUpdateOneWithoutRoleInput } from "../inputs/RolesTypeUpdateOneWithoutRoleInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoleUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RolesTypeUpdateOneWithoutRoleInput, {
    nullable: true
  })
  type?: RolesTypeUpdateOneWithoutRoleInput | undefined;
}
