import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationUpdateOneWithoutCaseInput } from "../inputs/ApplicationUpdateOneWithoutCaseInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CaseCategoryUpdateManyWithoutCaseIdInput } from "../inputs/CaseCategoryUpdateManyWithoutCaseIdInput";
import { CaseClassificationUpdateManyWithoutCaseIdInput } from "../inputs/CaseClassificationUpdateManyWithoutCaseIdInput";
import { CaseConsultationUpdateManyWithoutCaseIdInput } from "../inputs/CaseConsultationUpdateManyWithoutCaseIdInput";
import { CaseIncidentLocationUpdateManyWithoutCaseIdInput } from "../inputs/CaseIncidentLocationUpdateManyWithoutCaseIdInput";
import { CaseIssueUpdateManyWithoutCaseIdInput } from "../inputs/CaseIssueUpdateManyWithoutCaseIdInput";
import { CaseKorbanUpdateManyWithoutCaseIdInput } from "../inputs/CaseKorbanUpdateManyWithoutCaseIdInput";
import { CaseModusUpdateManyWithoutCaseIdInput } from "../inputs/CaseModusUpdateManyWithoutCaseIdInput";
import { CasePelakuUpdateManyWithoutCaseIdInput } from "../inputs/CasePelakuUpdateManyWithoutCaseIdInput";
import { CasePkUpdateOneWithoutCaseInput } from "../inputs/CasePkUpdateOneWithoutCaseInput";
import { CaseProgressActivityUpdateManyWithoutCaseIdInput } from "../inputs/CaseProgressActivityUpdateManyWithoutCaseIdInput";
import { CaseProgressUpdateOneWithoutCaseInput } from "../inputs/CaseProgressUpdateOneWithoutCaseInput";
import { CaseReferralUpdateManyWithoutCaseInput } from "../inputs/CaseReferralUpdateManyWithoutCaseInput";
import { CaseTransferReferralUpdateManyWithoutCaseIdInput } from "../inputs/CaseTransferReferralUpdateManyWithoutCaseIdInput";
import { CaseTransferUpdateOneWithoutCaseInput } from "../inputs/CaseTransferUpdateOneWithoutCaseInput";
import { CaseViolatedRightUpdateManyWithoutCaseIdInput } from "../inputs/CaseViolatedRightUpdateManyWithoutCaseIdInput";
import { CaseViolenceMethodUpdateManyWithoutCaseIdInput } from "../inputs/CaseViolenceMethodUpdateManyWithoutCaseIdInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LogRequestUpdateManyWithoutCaseIdInput } from "../inputs/LogRequestUpdateManyWithoutCaseIdInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpdateWithoutDocumentsInput {
  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  applicationId?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  caseClosed?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  caseClosedJenis?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  createdBy?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  hakTerlanggar?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  issue?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  judulKasus?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  klasifikasiDok?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  kronologiKasus?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  lockDitolak?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  statusPendampingan?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  targetAdvokasi?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  unlockPk?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  unlockTransfer?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  pelakuKorbanRelasi?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedBy?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CasePkUpdateOneWithoutCaseInput, {
    nullable: true
  })
  pk?: CasePkUpdateOneWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressUpdateOneWithoutCaseInput, {
    nullable: true
  })
  progresses?: CaseProgressUpdateOneWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseTransferUpdateOneWithoutCaseInput, {
    nullable: true
  })
  transfer?: CaseTransferUpdateOneWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpdateOneWithoutCaseInput, {
    nullable: true
  })
  application?: ApplicationUpdateOneWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseReferralUpdateManyWithoutCaseInput, {
    nullable: true
  })
  referrals?: CaseReferralUpdateManyWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseClassificationUpdateManyWithoutCaseIdInput, {
    nullable: true
  })
  classifications?: CaseClassificationUpdateManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationUpdateManyWithoutCaseIdInput, {
    nullable: true
  })
  consultations?: CaseConsultationUpdateManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseIssueUpdateManyWithoutCaseIdInput, {
    nullable: true
  })
  issues?: CaseIssueUpdateManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseKorbanUpdateManyWithoutCaseIdInput, {
    nullable: true
  })
  korbans?: CaseKorbanUpdateManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CasePelakuUpdateManyWithoutCaseIdInput, {
    nullable: true
  })
  pelakus?: CasePelakuUpdateManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityUpdateManyWithoutCaseIdInput, {
    nullable: true
  })
  activities?: CaseProgressActivityUpdateManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseTransferReferralUpdateManyWithoutCaseIdInput, {
    nullable: true
  })
  transferreferrals?: CaseTransferReferralUpdateManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseViolatedRightUpdateManyWithoutCaseIdInput, {
    nullable: true
  })
  violatedrights?: CaseViolatedRightUpdateManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => LogRequestUpdateManyWithoutCaseIdInput, {
    nullable: true
  })
  logRequests?: LogRequestUpdateManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseCategoryUpdateManyWithoutCaseIdInput, {
    nullable: true
  })
  categories?: CaseCategoryUpdateManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseIncidentLocationUpdateManyWithoutCaseIdInput, {
    nullable: true
  })
  incidentLocations?: CaseIncidentLocationUpdateManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseModusUpdateManyWithoutCaseIdInput, {
    nullable: true
  })
  moduses?: CaseModusUpdateManyWithoutCaseIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseViolenceMethodUpdateManyWithoutCaseIdInput, {
    nullable: true
  })
  violenceMethods?: CaseViolenceMethodUpdateManyWithoutCaseIdInput | undefined;
}
