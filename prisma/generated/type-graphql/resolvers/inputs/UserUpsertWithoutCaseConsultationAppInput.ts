import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCaseConsultationAppInput } from "../inputs/UserCreateWithoutCaseConsultationAppInput";
import { UserUpdateWithoutCaseConsultationAppInput } from "../inputs/UserUpdateWithoutCaseConsultationAppInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutCaseConsultationAppInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCaseConsultationAppInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCaseConsultationAppInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCaseConsultationAppInput, {
    nullable: false
  })
  create!: UserCreateWithoutCaseConsultationAppInput;
}
