import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RenamedcaseUpdateOneWithoutKorbansInput } from "../inputs/RenamedcaseUpdateOneWithoutKorbansInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseKorbanUpdateWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  keterangan?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateOneWithoutKorbansInput, {
    nullable: true
  })
  caseId?: RenamedcaseUpdateOneWithoutKorbansInput | undefined;
}
