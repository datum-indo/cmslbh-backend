import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DaftarPengacaraCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jabatan?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  namaLengkap?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  sembunyikan!: boolean;
}
