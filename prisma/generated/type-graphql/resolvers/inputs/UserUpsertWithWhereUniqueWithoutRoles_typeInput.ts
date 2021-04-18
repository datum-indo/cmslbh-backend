import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutRoles_typeInput } from "../inputs/UserCreateWithoutRoles_typeInput";
import { UserUpdateWithoutRoles_typeInput } from "../inputs/UserUpdateWithoutRoles_typeInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutRoles_typeInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutRoles_typeInput, {
    nullable: false
  })
  update!: UserUpdateWithoutRoles_typeInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutRoles_typeInput, {
    nullable: false
  })
  create!: UserCreateWithoutRoles_typeInput;
}
