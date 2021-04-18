import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MtVocabGroupCreateNestedOneWithoutMtvocabsInput } from "../inputs/MtVocabGroupCreateNestedOneWithoutMtvocabsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MtVocabCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  KODE?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kode_induk?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  level?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  sembunyikan!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teks?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  urutan?: number | undefined;

  @TypeGraphQL.Field(_type => MtVocabGroupCreateNestedOneWithoutMtvocabsInput, {
    nullable: true
  })
  kode_list?: MtVocabGroupCreateNestedOneWithoutMtvocabsInput | undefined;
}
