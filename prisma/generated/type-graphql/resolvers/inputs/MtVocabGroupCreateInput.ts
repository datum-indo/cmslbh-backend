import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MtVocabCreateNestedManyWithoutKode_listInput } from "../inputs/MtVocabCreateNestedManyWithoutKode_listInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MtVocabGroupCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nama_list?: string | undefined;

  @TypeGraphQL.Field(_type => MtVocabCreateNestedManyWithoutKode_listInput, {
    nullable: true
  })
  mtvocabs?: MtVocabCreateNestedManyWithoutKode_listInput | undefined;
}
