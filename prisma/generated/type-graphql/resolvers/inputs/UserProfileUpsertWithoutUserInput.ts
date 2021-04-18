import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateWithoutUserInput } from "../inputs/UserProfileCreateWithoutUserInput";
import { UserProfileUpdateWithoutUserInput } from "../inputs/UserProfileUpdateWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutUserInput, {
    nullable: false
  })
  update!: UserProfileUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => UserProfileCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserProfileCreateWithoutUserInput;
}
