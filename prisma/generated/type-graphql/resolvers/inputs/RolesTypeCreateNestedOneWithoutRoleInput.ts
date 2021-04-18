import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesTypeCreateOrConnectWithoutRoleInput } from "../inputs/RolesTypeCreateOrConnectWithoutRoleInput";
import { RolesTypeCreateWithoutRoleInput } from "../inputs/RolesTypeCreateWithoutRoleInput";
import { RolesTypeWhereUniqueInput } from "../inputs/RolesTypeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesTypeCreateNestedOneWithoutRoleInput {
  @TypeGraphQL.Field(_type => RolesTypeCreateWithoutRoleInput, {
    nullable: true
  })
  create?: RolesTypeCreateWithoutRoleInput | undefined;

  @TypeGraphQL.Field(_type => RolesTypeCreateOrConnectWithoutRoleInput, {
    nullable: true
  })
  connectOrCreate?: RolesTypeCreateOrConnectWithoutRoleInput | undefined;

  @TypeGraphQL.Field(_type => RolesTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: RolesTypeWhereUniqueInput | undefined;
}
