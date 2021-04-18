import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateWithoutTypeInput } from "../inputs/RoleCreateWithoutTypeInput";
import { RoleUpdateWithoutTypeInput } from "../inputs/RoleUpdateWithoutTypeInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoleUpsertWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => RoleWhereUniqueInput, {
    nullable: false
  })
  where!: RoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => RoleUpdateWithoutTypeInput, {
    nullable: false
  })
  update!: RoleUpdateWithoutTypeInput;

  @TypeGraphQL.Field(_type => RoleCreateWithoutTypeInput, {
    nullable: false
  })
  create!: RoleCreateWithoutTypeInput;
}
