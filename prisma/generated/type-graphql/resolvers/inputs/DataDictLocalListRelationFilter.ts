import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictLocalWhereInput } from "../inputs/DataDictLocalWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictLocalListRelationFilter {
  @TypeGraphQL.Field(_type => DataDictLocalWhereInput, {
    nullable: true
  })
  every?: DataDictLocalWhereInput | undefined;

  @TypeGraphQL.Field(_type => DataDictLocalWhereInput, {
    nullable: true
  })
  some?: DataDictLocalWhereInput | undefined;

  @TypeGraphQL.Field(_type => DataDictLocalWhereInput, {
    nullable: true
  })
  none?: DataDictLocalWhereInput | undefined;
}
