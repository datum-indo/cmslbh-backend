import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PersonUpdateOneWithoutCaseKorbanInput } from "../inputs/PersonUpdateOneWithoutCaseKorbanInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseKorbanUpdateWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  keterangan?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateOneWithoutCaseKorbanInput, {
    nullable: true
  })
  personId?: PersonUpdateOneWithoutCaseKorbanInput | undefined;
}
