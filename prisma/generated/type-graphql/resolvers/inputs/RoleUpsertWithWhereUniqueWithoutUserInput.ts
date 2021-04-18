import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateWithoutUserInput } from "../inputs/RoleCreateWithoutUserInput";
import { RoleUpdateWithoutUserInput } from "../inputs/RoleUpdateWithoutUserInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoleUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => RoleWhereUniqueInput, {
    nullable: false
  })
  where!: RoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => RoleUpdateWithoutUserInput, {
    nullable: false
  })
  update!: RoleUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => RoleCreateWithoutUserInput, {
    nullable: false
  })
  create!: RoleCreateWithoutUserInput;
}
