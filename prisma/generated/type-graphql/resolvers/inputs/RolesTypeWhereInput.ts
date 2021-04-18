import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { RoleListRelationFilter } from "../inputs/RoleListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesTypeWhereInput {
  @TypeGraphQL.Field(_type => [RolesTypeWhereInput], {
    nullable: true
  })
  AND?: RolesTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesTypeWhereInput], {
    nullable: true
  })
  OR?: RolesTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RolesTypeWhereInput], {
    nullable: true
  })
  NOT?: RolesTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => RoleListRelationFilter, {
    nullable: true
  })
  Role?: RoleListRelationFilter | undefined;
}
