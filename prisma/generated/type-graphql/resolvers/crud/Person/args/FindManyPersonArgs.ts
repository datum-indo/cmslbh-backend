import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonOrderByInput } from "../../../inputs/PersonOrderByInput";
import { PersonWhereInput } from "../../../inputs/PersonWhereInput";
import { PersonWhereUniqueInput } from "../../../inputs/PersonWhereUniqueInput";
import { PersonScalarFieldEnum } from "../../../../enums/PersonScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPersonArgs {
  @TypeGraphQL.Field(_type => PersonWhereInput, {
    nullable: true
  })
  where?: PersonWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PersonOrderByInput], {
    nullable: true
  })
  orderBy?: PersonOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  cursor?: PersonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PersonScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "agama" | "alamatDomisili" | "alamatId" | "alatBantu" | "alias" | "createdAt" | "createdBy" | "disabilitas" | "distrikDomisili" | "distrikId" | "domisiliSama" | "email" | "golDarah" | "jenisDisabilitas" | "jenisDomisili" | "orientasiSeksual" | "jenisId" | "jenisKelamin" | "jmlAnggota" | "namaLengkap" | "nomorId" | "pekerjaan" | "pekerjaanLokal" | "pendidikan" | "statusPernikahan" | "telepon" | "tglLahir" | "tmpLahir" | "unitSatuan" | "updatedAt" | "updatedBy" | "wargaNegara"> | undefined;
}
