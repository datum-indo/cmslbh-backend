import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RenamedcaseUpdateOneWithoutCategoriesInput } from "../inputs/RenamedcaseUpdateOneWithoutCategoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseCategoryUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  kodeMt?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateOneWithoutCategoriesInput, {
    nullable: true
  })
  caseId?: RenamedcaseUpdateOneWithoutCategoriesInput | undefined;
}
