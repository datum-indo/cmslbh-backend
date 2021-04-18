import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MtVocabGroup } from "../models/MtVocabGroup";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class MtVocab {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  KODE!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kode_induk?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  level?: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  sembunyikan!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teks?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  urutan?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  kode_list_group?: number | null;

  kode_list?: MtVocabGroup | null;
}
