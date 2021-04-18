import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MtVocabUpdateManyWithoutKode_listInput } from "../inputs/MtVocabUpdateManyWithoutKode_listInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MtVocabGroupUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  nama_list?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MtVocabUpdateManyWithoutKode_listInput, {
    nullable: true
  })
  mtvocabs?: MtVocabUpdateManyWithoutKode_listInput | undefined;
}
