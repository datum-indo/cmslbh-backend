import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictLocalScalarWhereInput {
  @TypeGraphQL.Field(_type => [DataDictLocalScalarWhereInput], {
    nullable: true
  })
  AND?: DataDictLocalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DataDictLocalScalarWhereInput], {
    nullable: true
  })
  OR?: DataDictLocalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DataDictLocalScalarWhereInput], {
    nullable: true
  })
  NOT?: DataDictLocalScalarWhereInput[] | undefined;

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
}
