import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DaftarPengacaraOrderByInput } from "../../../inputs/DaftarPengacaraOrderByInput";
import { DaftarPengacaraWhereInput } from "../../../inputs/DaftarPengacaraWhereInput";
import { DaftarPengacaraWhereUniqueInput } from "../../../inputs/DaftarPengacaraWhereUniqueInput";
import { DaftarPengacaraScalarFieldEnum } from "../../../../enums/DaftarPengacaraScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyDaftarPengacaraArgs {
  @TypeGraphQL.Field(_type => DaftarPengacaraWhereInput, {
    nullable: true
  })
  where?: DaftarPengacaraWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DaftarPengacaraOrderByInput], {
    nullable: true
  })
  orderBy?: DaftarPengacaraOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => DaftarPengacaraWhereUniqueInput, {
    nullable: true
  })
  cursor?: DaftarPengacaraWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DaftarPengacaraScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"ID" | "jabatan" | "namaLengkap" | "sembunyikan"> | undefined;
}
