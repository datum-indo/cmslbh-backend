import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesTypeCreateWithoutRoleInput } from "../inputs/RolesTypeCreateWithoutRoleInput";
import { RolesTypeUpdateWithoutRoleInput } from "../inputs/RolesTypeUpdateWithoutRoleInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesTypeUpsertWithoutRoleInput {
  @TypeGraphQL.Field(_type => RolesTypeUpdateWithoutRoleInput, {
    nullable: false
  })
  update!: RolesTypeUpdateWithoutRoleInput;

  @TypeGraphQL.Field(_type => RolesTypeCreateWithoutRoleInput, {
    nullable: false
  })
  create!: RolesTypeCreateWithoutRoleInput;
}
