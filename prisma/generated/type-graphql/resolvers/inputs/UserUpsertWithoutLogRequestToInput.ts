import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLogRequestToInput } from "../inputs/UserCreateWithoutLogRequestToInput";
import { UserUpdateWithoutLogRequestToInput } from "../inputs/UserUpdateWithoutLogRequestToInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutLogRequestToInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutLogRequestToInput, {
    nullable: false
  })
  update!: UserUpdateWithoutLogRequestToInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLogRequestToInput, {
    nullable: false
  })
  create!: UserCreateWithoutLogRequestToInput;
}
