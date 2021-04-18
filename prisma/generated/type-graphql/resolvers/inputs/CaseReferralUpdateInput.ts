import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NetworkUpdateOneWithoutCaseReferralInput } from "../inputs/NetworkUpdateOneWithoutCaseReferralInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PersonUpdateOneWithoutCaseReferralInput } from "../inputs/PersonUpdateOneWithoutCaseReferralInput";
import { RenamedcaseUpdateOneWithoutReferralsInput } from "../inputs/RenamedcaseUpdateOneWithoutReferralsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseReferralUpdateInput {
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

  @TypeGraphQL.Field(_type => RenamedcaseUpdateOneWithoutReferralsInput, {
    nullable: true
  })
  case?: RenamedcaseUpdateOneWithoutReferralsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateOneWithoutCaseReferralInput, {
    nullable: true
  })
  client?: PersonUpdateOneWithoutCaseReferralInput | undefined;

  @TypeGraphQL.Field(_type => NetworkUpdateOneWithoutCaseReferralInput, {
    nullable: true
  })
  network?: NetworkUpdateOneWithoutCaseReferralInput | undefined;
}
