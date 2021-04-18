import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RenamedcaseUpdateOneWithoutActivitiesInput } from "../inputs/RenamedcaseUpdateOneWithoutActivitiesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  capaian?: NullableStringFieldUpdateOperationsInput | undefined;

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
  hambatan?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  judulAktifitas?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  position?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  rencanaStrategi?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  targetAdvokasi?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  tglAktifitas?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedBy?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateOneWithoutActivitiesInput, {
    nullable: true
  })
  caseId?: RenamedcaseUpdateOneWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput, {
    nullable: true
  })
  activitieslit?: CaseProgressActivityLitUpdateManyWithoutCaseProgressActivityIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput, {
    nullable: true
  })
  activitiesnonlit?: CaseProgressActivityNonlitUpdateManyWithoutCaseProgressActivityIdInput | undefined;
}
