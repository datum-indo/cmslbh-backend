import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PersonRelationFilter } from "../inputs/PersonRelationFilter";
import { RenamedcaseRelationFilter } from "../inputs/RenamedcaseRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseKorbanWhereInput {
  @TypeGraphQL.Field(_type => [CaseKorbanWhereInput], {
    nullable: true
  })
  AND?: CaseKorbanWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanWhereInput], {
    nullable: true
  })
  OR?: CaseKorbanWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseKorbanWhereInput], {
    nullable: true
  })
  NOT?: CaseKorbanWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  case_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  person_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  keterangan?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseRelationFilter, {
    nullable: true
  })
  caseId?: RenamedcaseRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PersonRelationFilter, {
    nullable: true
  })
  personId?: PersonRelationFilter | undefined;
}
