import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DataDictUpdateOneWithoutDataDictLocalInput } from "../inputs/DataDictUpdateOneWithoutDataDictLocalInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DataDictLocalUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  label?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  lang?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DataDictUpdateOneWithoutDataDictLocalInput, {
    nullable: true
  })
  DataDict?: DataDictUpdateOneWithoutDataDictLocalInput | undefined;
}
