import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateNestedOneWithoutCaseInput } from "../inputs/ApplicationCreateNestedOneWithoutCaseInput";
import { CaseCategoryCreateNestedManyWithoutCaseIdInput } from "../inputs/CaseCategoryCreateNestedManyWithoutCaseIdInput";
import { CaseClassificationCreateNestedManyWithoutCaseIdInput } from "../inputs/CaseClassificationCreateNestedManyWithoutCaseIdInput";
import { CaseConsultationCreateNestedManyWithoutCaseIdInput } from "../inputs/CaseConsultationCreateNestedManyWithoutCaseIdInput";
import { CaseDocumentCreateNestedManyWithoutCaseInput } from "../inputs/CaseDocumentCreateNestedManyWithoutCaseInput";
import { CaseIncidentLocationCreateNestedManyWithoutCaseIdInput } from "../inputs/CaseIncidentLocationCreateNestedManyWithoutCaseIdInput";
import { CaseIssueCreateNestedManyWithoutCaseIdInput } from "../inputs/CaseIssueCreateNestedManyWithoutCaseIdInput";
import { CaseKorbanCreateNestedManyWithoutCaseIdInput } from "../inputs/CaseKorbanCreateNestedManyWithoutCaseIdInput";
import { CaseModusCreateNestedManyWithoutCaseIdInput } from "../inputs/CaseModusCreateNestedManyWithoutCaseIdInput";
import { CasePelakuCreateNestedManyWithoutCaseIdInput } from "../inputs/CasePelakuCreateNestedManyWithoutCaseIdInput";
import { CasePkCreateNestedOneWithoutCaseInput } from "../inputs/CasePkCreateNestedOneWithoutCaseInput";
import { CaseProgressActivityCreateNestedManyWithoutCaseIdInput } from "../inputs/CaseProgressActivityCreateNestedManyWithoutCaseIdInput";
import { CaseProgressCreateNestedOneWithoutCaseInput } from "../inputs/CaseProgressCreateNestedOneWithoutCaseInput";
import { CaseTransferCreateNestedOneWithoutCaseInput } from "../inputs/CaseTransferCreateNestedOneWithoutCaseInput";
import { CaseTransferReferralCreateNestedManyWithoutCaseIdInput } from "../inputs/CaseTransferReferralCreateNestedManyWithoutCaseIdInput";
import { CaseViolatedRightCreateNestedManyWithoutCaseIdInput } from "../inputs/CaseViolatedRightCreateNestedManyWithoutCaseIdInput";
import { CaseViolenceMethodCreateNestedManyWithoutCaseIdInput } from "../inputs/CaseViolenceMethodCreateNestedManyWithoutCaseIdInput";
import { LogRequestCreateNestedManyWithoutCaseIdInput } from "../inputs/LogRequestCreateNestedManyWithoutCaseIdInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateWithoutReferralsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  applicationId?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  caseClosed!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  caseClosedJenis?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  hakTerlanggar?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  issue?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  judulKasus?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  klasifikasiDok?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kronologiKasus?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  lockDitolak!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statusPendampingan?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  targetAdvokasi?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  unlockPk!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  unlockTransfer!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pelakuKorbanRelasi?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | undefined;

  @TypeGraphQL.Field(_type => CasePkCreateNestedOneWithoutCaseInput, {
    nullable: true
  })
  pk?: CasePkCreateNestedOneWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressCreateNestedOneWithoutCaseInput, {
    nullable: true
  })
  progresses?: CaseProgressCreateNestedOneWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseTransferCreateNestedOneWithoutCaseInput, {
    nullable: true
  })
  transfer?: CaseTransferCreateNestedOneWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateNestedOneWithoutCaseInput, {
    nullable: true
  })
  application?: ApplicationCreateNestedOneWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseClassificationCreateNestedManyWithoutCaseIdInput, {
    nullable: true
  })
  classifications?: CaseClassificationCreateNestedManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationCreateNestedManyWithoutCaseIdInput, {
    nullable: true
  })
  consultations?: CaseConsultationCreateNestedManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseDocumentCreateNestedManyWithoutCaseInput, {
    nullable: true
  })
  documents?: CaseDocumentCreateNestedManyWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseIssueCreateNestedManyWithoutCaseIdInput, {
    nullable: true
  })
  issues?: CaseIssueCreateNestedManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseKorbanCreateNestedManyWithoutCaseIdInput, {
    nullable: true
  })
  korbans?: CaseKorbanCreateNestedManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CasePelakuCreateNestedManyWithoutCaseIdInput, {
    nullable: true
  })
  pelakus?: CasePelakuCreateNestedManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityCreateNestedManyWithoutCaseIdInput, {
    nullable: true
  })
  activities?: CaseProgressActivityCreateNestedManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseTransferReferralCreateNestedManyWithoutCaseIdInput, {
    nullable: true
  })
  transferreferrals?: CaseTransferReferralCreateNestedManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseViolatedRightCreateNestedManyWithoutCaseIdInput, {
    nullable: true
  })
  violatedrights?: CaseViolatedRightCreateNestedManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestCreateNestedManyWithoutCaseIdInput, {
    nullable: true
  })
  logRequests?: LogRequestCreateNestedManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseCategoryCreateNestedManyWithoutCaseIdInput, {
    nullable: true
  })
  categories?: CaseCategoryCreateNestedManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseIncidentLocationCreateNestedManyWithoutCaseIdInput, {
    nullable: true
  })
  incidentLocations?: CaseIncidentLocationCreateNestedManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseModusCreateNestedManyWithoutCaseIdInput, {
    nullable: true
  })
  moduses?: CaseModusCreateNestedManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseViolenceMethodCreateNestedManyWithoutCaseIdInput, {
    nullable: true
  })
  violenceMethods?: CaseViolenceMethodCreateNestedManyWithoutCaseIdInput | undefined;
}
