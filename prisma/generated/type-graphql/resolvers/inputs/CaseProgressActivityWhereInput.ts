import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityLitListRelationFilter } from "../inputs/CaseProgressActivityLitListRelationFilter";
import { CaseProgressActivityNonlitListRelationFilter } from "../inputs/CaseProgressActivityNonlitListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { RenamedcaseRelationFilter } from "../inputs/RenamedcaseRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityWhereInput {
  @TypeGraphQL.Field(_type => [CaseProgressActivityWhereInput], {
    nullable: true
  })
  AND?: CaseProgressActivityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityWhereInput], {
    nullable: true
  })
  OR?: CaseProgressActivityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityWhereInput], {
    nullable: true
  })
  NOT?: CaseProgressActivityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  capaian?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  createdBy?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  hambatan?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  judulAktifitas?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  position?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  rencanaStrategi?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  targetAdvokasi?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  tglAktifitas?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  updatedBy?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  case_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseRelationFilter, {
    nullable: true
  })
  caseId?: RenamedcaseRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityLitListRelationFilter, {
    nullable: true
  })
  activitieslit?: CaseProgressActivityLitListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitListRelationFilter, {
    nullable: true
  })
  activitiesnonlit?: CaseProgressActivityNonlitListRelationFilter | undefined;
}
