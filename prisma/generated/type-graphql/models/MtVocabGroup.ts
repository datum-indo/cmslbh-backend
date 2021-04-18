import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MtVocab } from "../models/MtVocab";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class MtVocabGroup {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  kode_list!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nama_list?: string | null;

  mtvocabs?: MtVocab[];
}
