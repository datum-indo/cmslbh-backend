import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { RenamedcaseRelationFilter } from "../inputs/RenamedcaseRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferReferralWhereInput {
  @TypeGraphQL.Field(_type => [CaseTransferReferralWhereInput], {
    nullable: true
  })
  AND?: CaseTransferReferralWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferReferralWhereInput], {
    nullable: true
  })
  OR?: CaseTransferReferralWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseTransferReferralWhereInput], {
    nullable: true
  })
  NOT?: CaseTransferReferralWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  catatan?: StringNullableFilter | undefined;

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
  document?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  jenisTransferReferral?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  networkId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  tglTransferReferral?: DateTimeNullableFilter | undefined;

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
}
