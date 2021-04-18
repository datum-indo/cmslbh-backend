import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationAppScalarWhereInput {
  @TypeGraphQL.Field(_type => [CaseConsultationAppScalarWhereInput], {
    nullable: true
  })
  AND?: CaseConsultationAppScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppScalarWhereInput], {
    nullable: true
  })
  OR?: CaseConsultationAppScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseConsultationAppScalarWhereInput], {
    nullable: true
  })
  NOT?: CaseConsultationAppScalarWhereInput[] | undefined;

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
}
