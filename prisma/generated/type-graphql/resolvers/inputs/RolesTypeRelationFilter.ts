import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesTypeWhereInput } from "../inputs/RolesTypeWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RolesTypeRelationFilter {
  @TypeGraphQL.Field(_type => RolesTypeWhereInput, {
    nullable: true
  })
  is?: RolesTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => RolesTypeWhereInput, {
    nullable: true
  })
  isNot?: RolesTypeWhereInput | undefined;
}
