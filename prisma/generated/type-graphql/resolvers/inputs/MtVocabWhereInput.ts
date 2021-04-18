import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MtVocabGroupRelationFilter } from "../inputs/MtVocabGroupRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MtVocabWhereInput {
  @TypeGraphQL.Field(_type => [MtVocabWhereInput], {
    nullable: true
  })
  AND?: MtVocabWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MtVocabWhereInput], {
    nullable: true
  })
  OR?: MtVocabWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MtVocabWhereInput], {
    nullable: true
  })
  NOT?: MtVocabWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  KODE?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  kode_induk?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  level?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  sembunyikan?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  teks?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  urutan?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  kode_list_group?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => MtVocabGroupRelationFilter, {
    nullable: true
  })
  kode_list?: MtVocabGroupRelationFilter | undefined;
}
