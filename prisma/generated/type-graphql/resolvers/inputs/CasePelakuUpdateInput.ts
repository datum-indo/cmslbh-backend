import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PersonUpdateOneWithoutCasePelakuInput } from "../inputs/PersonUpdateOneWithoutCasePelakuInput";
import { RenamedcaseUpdateOneWithoutPelakusInput } from "../inputs/RenamedcaseUpdateOneWithoutPelakusInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePelakuUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  jenisPelaku?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateOneWithoutPelakusInput, {
    nullable: true
  })
  caseId?: RenamedcaseUpdateOneWithoutPelakusInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateOneWithoutCasePelakuInput, {
    nullable: true
  })
  personId?: PersonUpdateOneWithoutCasePelakuInput | undefined;
}
