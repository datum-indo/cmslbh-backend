import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class MtVocabMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  KODE!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kode_induk!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  level!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  sembunyikan!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  teks!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  urutan!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  kode_list_group!: number | null;
}
