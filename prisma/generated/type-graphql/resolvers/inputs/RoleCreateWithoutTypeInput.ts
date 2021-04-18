import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutRoles_typeInput } from "../inputs/UserCreateNestedManyWithoutRoles_typeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoleCreateWithoutTypeInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutRoles_typeInput, {
    nullable: true
  })
  User?: UserCreateNestedManyWithoutRoles_typeInput | undefined;
}
