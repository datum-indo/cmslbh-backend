import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLogRequestByInput } from "../inputs/UserCreateWithoutLogRequestByInput";
import { UserUpdateWithoutLogRequestByInput } from "../inputs/UserUpdateWithoutLogRequestByInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutLogRequestByInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutLogRequestByInput, {
    nullable: false
  })
  update!: UserUpdateWithoutLogRequestByInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLogRequestByInput, {
    nullable: false
  })
  create!: UserCreateWithoutLogRequestByInput;
}
