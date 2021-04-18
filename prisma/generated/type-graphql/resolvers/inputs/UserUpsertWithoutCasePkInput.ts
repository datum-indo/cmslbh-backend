import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCasePkInput } from "../inputs/UserCreateWithoutCasePkInput";
import { UserUpdateWithoutCasePkInput } from "../inputs/UserUpdateWithoutCasePkInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutCasePkInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCasePkInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCasePkInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCasePkInput, {
    nullable: false
  })
  create!: UserCreateWithoutCasePkInput;
}
