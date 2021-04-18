import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationUpdateOneWithoutAppsInput } from "../inputs/CaseConsultationUpdateOneWithoutAppsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationAppUpdateWithoutAppConsultationInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  keterangan?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationUpdateOneWithoutAppsInput, {
    nullable: true
  })
  caseConsultationId?: CaseConsultationUpdateOneWithoutAppsInput | undefined;
}
