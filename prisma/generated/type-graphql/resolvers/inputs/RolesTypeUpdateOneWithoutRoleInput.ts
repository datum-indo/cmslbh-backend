import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesTypeCreateOrConnectWithoutRoleInput } from "../inputs/RolesTypeCreateOrConnectWithoutRoleInput";
import { RolesTypeCreateWithoutRoleInput } from "../inputs/RolesTypeCreateWithoutRoleInput";
import { RolesTypeUpdateWithoutRoleInput } from "../inputs/RolesTypeUpdateWithoutRoleInput";
import { RolesTypeUpsertWithoutRoleInput } from "../inputs/RolesTypeUpsertWithoutRoleInput";
import { RolesTypeWhereUniqueInput } from "../inputs/RolesTypeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesTypeUpdateOneWithoutRoleInput {
  @TypeGraphQL.Field(_type => RolesTypeCreateWithoutRoleInput, {
    nullable: true
  })
  create?: RolesTypeCreateWithoutRoleInput | undefined;

  @TypeGraphQL.Field(_type => RolesTypeCreateOrConnectWithoutRoleInput, {
    nullable: true
  })
  connectOrCreate?: RolesTypeCreateOrConnectWithoutRoleInput | undefined;

  @TypeGraphQL.Field(_type => RolesTypeUpsertWithoutRoleInput, {
    nullable: true
  })
  upsert?: RolesTypeUpsertWithoutRoleInput | undefined;

  @TypeGraphQL.Field(_type => RolesTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: RolesTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RolesTypeUpdateWithoutRoleInput, {
    nullable: true
  })
  update?: RolesTypeUpdateWithoutRoleInput | undefined;
}
