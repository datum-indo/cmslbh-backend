import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RenamedcaseUpdateOneWithoutClassificationsInput } from "../inputs/RenamedcaseUpdateOneWithoutClassificationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseClassificationUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  kodeMt?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateOneWithoutClassificationsInput, {
    nullable: true
  })
  caseId?: RenamedcaseUpdateOneWithoutClassificationsInput | undefined;
}
