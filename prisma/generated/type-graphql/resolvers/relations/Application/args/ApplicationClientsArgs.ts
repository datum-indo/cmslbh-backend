import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClientOrderByInput } from "../../../inputs/ClientOrderByInput";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";
import { ClientScalarFieldEnum } from "../../../../enums/ClientScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ApplicationClientsArgs {
  @TypeGraphQL.Field(_type => ClientWhereInput, {
    nullable: true
  })
  where?: ClientWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClientOrderByInput], {
    nullable: true
  })
  orderBy?: ClientOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: true
  })
  cursor?: ClientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ClientScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "alamatLokasi" | "asetGedung" | "asetKios" | "asetLahanGarapan" | "asetLapak" | "asetMobil" | "asetMotor" | "asetRumah" | "asetTanah" | "asetToko" | "asetWarung" | "createdAt" | "createdBy" | "pendapatan" | "sktm" | "sktmUpload" | "stmKeterangan" | "tanggunganAnak" | "tanggunganFamili" | "tanggunganLain" | "tanggunganPasangan" | "updatedAt" | "updatedBy" | "usiaSaatKlien" | "person" | "application"> | undefined;
}
