import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RenamedcaseUpdateOneWithoutModusesInput } from "../inputs/RenamedcaseUpdateOneWithoutModusesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseModusUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  kodeMt?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateOneWithoutModusesInput, {
    nullable: true
  })
  caseId?: RenamedcaseUpdateOneWithoutModusesInput | undefined;
}
