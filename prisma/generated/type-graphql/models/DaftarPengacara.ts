import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class DaftarPengacara {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jabatan?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  namaLengkap?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  sembunyikan!: boolean;
}
