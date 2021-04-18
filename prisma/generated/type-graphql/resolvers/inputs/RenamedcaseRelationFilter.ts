import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseWhereInput } from "../inputs/RenamedcaseWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseRelationFilter {
  @TypeGraphQL.Field(_type => RenamedcaseWhereInput, {
    nullable: true
  })
  is?: RenamedcaseWhereInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereInput, {
    nullable: true
  })
  isNot?: RenamedcaseWhereInput | undefined;
}
