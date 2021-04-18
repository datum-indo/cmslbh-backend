import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictRelationFilter } from "../inputs/DataDictRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictLocalWhereInput {
  @TypeGraphQL.Field(_type => [DataDictLocalWhereInput], {
    nullable: true
  })
  AND?: DataDictLocalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DataDictLocalWhereInput], {
    nullable: true
  })
  OR?: DataDictLocalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DataDictLocalWhereInput], {
    nullable: true
  })
  NOT?: DataDictLocalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  label?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  lang?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  fieldNumber?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DataDictRelationFilter, {
    nullable: true
  })
  DataDict?: DataDictRelationFilter | undefined;
}
