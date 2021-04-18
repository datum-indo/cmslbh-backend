import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityUpdateOneWithoutActivitiesnonlitInput } from "../inputs/CaseProgressActivityUpdateOneWithoutActivitiesnonlitInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityNonlitUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  kodeMt?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityUpdateOneWithoutActivitiesnonlitInput, {
    nullable: true
  })
  caseProgressActivityId?: CaseProgressActivityUpdateOneWithoutActivitiesnonlitInput | undefined;
}
