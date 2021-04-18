import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesTypeCreateWithoutRoleInput } from "../inputs/RolesTypeCreateWithoutRoleInput";
import { RolesTypeWhereUniqueInput } from "../inputs/RolesTypeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesTypeCreateOrConnectWithoutRoleInput {
  @TypeGraphQL.Field(_type => RolesTypeWhereUniqueInput, {
    nullable: false
  })
  where!: RolesTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => RolesTypeCreateWithoutRoleInput, {
    nullable: false
  })
  create!: RolesTypeCreateWithoutRoleInput;
}
