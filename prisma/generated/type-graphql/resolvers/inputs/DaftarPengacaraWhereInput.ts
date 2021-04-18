import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DaftarPengacaraWhereInput {
  @TypeGraphQL.Field(_type => [DaftarPengacaraWhereInput], {
    nullable: true
  })
  AND?: DaftarPengacaraWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DaftarPengacaraWhereInput], {
    nullable: true
  })
  OR?: DaftarPengacaraWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DaftarPengacaraWhereInput], {
    nullable: true
  })
  NOT?: DaftarPengacaraWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  jabatan?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  namaLengkap?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  sembunyikan?: BoolFilter | undefined;
}
