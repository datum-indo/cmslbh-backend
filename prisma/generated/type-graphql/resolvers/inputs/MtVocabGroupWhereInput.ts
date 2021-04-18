import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MtVocabListRelationFilter } from "../inputs/MtVocabListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MtVocabGroupWhereInput {
  @TypeGraphQL.Field(_type => [MtVocabGroupWhereInput], {
    nullable: true
  })
  AND?: MtVocabGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MtVocabGroupWhereInput], {
    nullable: true
  })
  OR?: MtVocabGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MtVocabGroupWhereInput], {
    nullable: true
  })
  NOT?: MtVocabGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  kode_list?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  nama_list?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => MtVocabListRelationFilter, {
    nullable: true
  })
  mtvocabs?: MtVocabListRelationFilter | undefined;
}
