import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkUpdateOneWithoutCaseReferralInput } from "../inputs/NetworkUpdateOneWithoutCaseReferralInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PersonUpdateOneWithoutCaseReferralInput } from "../inputs/PersonUpdateOneWithoutCaseReferralInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseReferralUpdateWithoutCaseInput {
  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  tglTransfer?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  catatan?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  createdBy?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedBy?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateOneWithoutCaseReferralInput, {
    nullable: true
  })
  client?: PersonUpdateOneWithoutCaseReferralInput | undefined;

  @TypeGraphQL.Field(_type => NetworkUpdateOneWithoutCaseReferralInput, {
    nullable: true
  })
  network?: NetworkUpdateOneWithoutCaseReferralInput | undefined;
}
