import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleWhereInput } from "../inputs/RoleWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoleListRelationFilter {
  @TypeGraphQL.Field(_type => RoleWhereInput, {
    nullable: true
  })
  every?: RoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => RoleWhereInput, {
    nullable: true
  })
  some?: RoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => RoleWhereInput, {
    nullable: true
  })
  none?: RoleWhereInput | undefined;
}
