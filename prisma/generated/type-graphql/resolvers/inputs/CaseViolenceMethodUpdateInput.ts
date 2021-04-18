import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RenamedcaseUpdateOneWithoutViolenceMethodsInput } from "../inputs/RenamedcaseUpdateOneWithoutViolenceMethodsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseViolenceMethodUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  kodeMt?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateOneWithoutViolenceMethodsInput, {
    nullable: true
  })
  caseId?: RenamedcaseUpdateOneWithoutViolenceMethodsInput | undefined;
}
