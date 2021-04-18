import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationRelationFilter } from "../inputs/CaseConsultationRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationAppWhereInput {
  @TypeGraphQL.Field(_type => [CaseConsultationAppWhereInput], {
    nullable: true
  })
  AND?: CaseConsultationAppWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppWhereInput], {
    nullable: true
  })
  OR?: CaseConsultationAppWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppWhereInput], {
    nullable: true
  })
  NOT?: CaseConsultationAppWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  app_consultation?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  case_consultation_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  keterangan?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  appConsultation?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationRelationFilter, {
    nullable: true
  })
  caseConsultationId?: CaseConsultationRelationFilter | undefined;
}
