import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationRelationFilter } from "../inputs/ApplicationRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { CaseCategoryListRelationFilter } from "../inputs/CaseCategoryListRelationFilter";
import { CaseClassificationListRelationFilter } from "../inputs/CaseClassificationListRelationFilter";
import { CaseConsultationListRelationFilter } from "../inputs/CaseConsultationListRelationFilter";
import { CaseDocumentListRelationFilter } from "../inputs/CaseDocumentListRelationFilter";
import { CaseIncidentLocationListRelationFilter } from "../inputs/CaseIncidentLocationListRelationFilter";
import { CaseIssueListRelationFilter } from "../inputs/CaseIssueListRelationFilter";
import { CaseKorbanListRelationFilter } from "../inputs/CaseKorbanListRelationFilter";
import { CaseModusListRelationFilter } from "../inputs/CaseModusListRelationFilter";
import { CasePelakuListRelationFilter } from "../inputs/CasePelakuListRelationFilter";
import { CasePkRelationFilter } from "../inputs/CasePkRelationFilter";
import { CaseProgressActivityListRelationFilter } from "../inputs/CaseProgressActivityListRelationFilter";
import { CaseProgressRelationFilter } from "../inputs/CaseProgressRelationFilter";
import { CaseReferralListRelationFilter } from "../inputs/CaseReferralListRelationFilter";
import { CaseTransferReferralListRelationFilter } from "../inputs/CaseTransferReferralListRelationFilter";
import { CaseTransferRelationFilter } from "../inputs/CaseTransferRelationFilter";
import { CaseViolatedRightListRelationFilter } from "../inputs/CaseViolatedRightListRelationFilter";
import { CaseViolenceMethodListRelationFilter } from "../inputs/CaseViolenceMethodListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LogRequestListRelationFilter } from "../inputs/LogRequestListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseWhereInput {
  @TypeGraphQL.Field(_type => [RenamedcaseWhereInput], {
    nullable: true
  })
  AND?: RenamedcaseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RenamedcaseWhereInput], {
    nullable: true
  })
  OR?: RenamedcaseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RenamedcaseWhereInput], {
    nullable: true
  })
  NOT?: RenamedcaseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  applicationId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  caseClosed?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  caseClosedJenis?: StringNullableFilter | undefined;

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
  hakTerlanggar?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  issue?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  judulKasus?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  klasifikasiDok?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  kronologiKasus?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  lockDitolak?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  statusPendampingan?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  targetAdvokasi?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  unlockPk?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  unlockTransfer?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  pelakuKorbanRelasi?: StringNullableFilter | undefined;

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
  case_progresses?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  case_transfer?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  case_pk?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CasePkRelationFilter, {
    nullable: true
  })
  pk?: CasePkRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseProgressRelationFilter, {
    nullable: true
  })
  progresses?: CaseProgressRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseTransferRelationFilter, {
    nullable: true
  })
  transfer?: CaseTransferRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ApplicationRelationFilter, {
    nullable: true
  })
  application?: ApplicationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseReferralListRelationFilter, {
    nullable: true
  })
  referrals?: CaseReferralListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseClassificationListRelationFilter, {
    nullable: true
  })
  classifications?: CaseClassificationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationListRelationFilter, {
    nullable: true
  })
  consultations?: CaseConsultationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseDocumentListRelationFilter, {
    nullable: true
  })
  documents?: CaseDocumentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseIssueListRelationFilter, {
    nullable: true
  })
  issues?: CaseIssueListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseKorbanListRelationFilter, {
    nullable: true
  })
  korbans?: CaseKorbanListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CasePelakuListRelationFilter, {
    nullable: true
  })
  pelakus?: CasePelakuListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityListRelationFilter, {
    nullable: true
  })
  activities?: CaseProgressActivityListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseTransferReferralListRelationFilter, {
    nullable: true
  })
  transferreferrals?: CaseTransferReferralListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseViolatedRightListRelationFilter, {
    nullable: true
  })
  violatedrights?: CaseViolatedRightListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LogRequestListRelationFilter, {
    nullable: true
  })
  logRequests?: LogRequestListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseCategoryListRelationFilter, {
    nullable: true
  })
  categories?: CaseCategoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseIncidentLocationListRelationFilter, {
    nullable: true
  })
  incidentLocations?: CaseIncidentLocationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseModusListRelationFilter, {
    nullable: true
  })
  moduses?: CaseModusListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CaseViolenceMethodListRelationFilter, {
    nullable: true
  })
  violenceMethods?: CaseViolenceMethodListRelationFilter | undefined;
}
