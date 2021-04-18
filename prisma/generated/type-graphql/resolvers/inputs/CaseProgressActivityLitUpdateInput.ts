import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityUpdateOneWithoutActivitieslitInput } from "../inputs/CaseProgressActivityUpdateOneWithoutActivitieslitInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityLitUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  kodeMt?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityUpdateOneWithoutActivitieslitInput, {
    nullable: true
  })
  caseProgressActivityId?: CaseProgressActivityUpdateOneWithoutActivitieslitInput | undefined;
}
