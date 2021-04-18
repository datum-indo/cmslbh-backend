import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictWhereInput } from "../inputs/DataDictWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictRelationFilter {
  @TypeGraphQL.Field(_type => DataDictWhereInput, {
    nullable: true
  })
  is?: DataDictWhereInput | undefined;

  @TypeGraphQL.Field(_type => DataDictWhereInput, {
    nullable: true
  })
  isNot?: DataDictWhereInput | undefined;
}
