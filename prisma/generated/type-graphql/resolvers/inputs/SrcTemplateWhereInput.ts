import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SrcTemplateWhereInput {
  @TypeGraphQL.Field(_type => [SrcTemplateWhereInput], {
    nullable: true
  })
  AND?: SrcTemplateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SrcTemplateWhereInput], {
    nullable: true
  })
  OR?: SrcTemplateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SrcTemplateWhereInput], {
    nullable: true
  })
  NOT?: SrcTemplateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  template?: StringNullableFilter | undefined;
}
