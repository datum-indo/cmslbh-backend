import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLogRequestAppInput } from "../inputs/UserCreateWithoutLogRequestAppInput";
import { UserUpdateWithoutLogRequestAppInput } from "../inputs/UserUpdateWithoutLogRequestAppInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutLogRequestAppInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutLogRequestAppInput, {
    nullable: false
  })
  update!: UserUpdateWithoutLogRequestAppInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLogRequestAppInput, {
    nullable: false
  })
  create!: UserCreateWithoutLogRequestAppInput;
}
