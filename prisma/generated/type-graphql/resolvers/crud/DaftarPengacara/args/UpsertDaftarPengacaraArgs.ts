import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DaftarPengacaraCreateInput } from "../../../inputs/DaftarPengacaraCreateInput";
import { DaftarPengacaraUpdateInput } from "../../../inputs/DaftarPengacaraUpdateInput";
import { DaftarPengacaraWhereUniqueInput } from "../../../inputs/DaftarPengacaraWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertDaftarPengacaraArgs {
  @TypeGraphQL.Field(_type => DaftarPengacaraWhereUniqueInput, {
    nullable: false
  })
  where!: DaftarPengacaraWhereUniqueInput;

  @TypeGraphQL.Field(_type => DaftarPengacaraCreateInput, {
    nullable: false
  })
  create!: DaftarPengacaraCreateInput;

  @TypeGraphQL.Field(_type => DaftarPengacaraUpdateInput, {
    nullable: false
  })
  update!: DaftarPengacaraUpdateInput;
}
