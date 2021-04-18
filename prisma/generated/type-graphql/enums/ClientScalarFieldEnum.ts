import * as TypeGraphQL from "type-graphql";

export enum ClientScalarFieldEnum {
  id = "id",
  alamatLokasi = "alamatLokasi",
  asetGedung = "asetGedung",
  asetKios = "asetKios",
  asetLahanGarapan = "asetLahanGarapan",
  asetLapak = "asetLapak",
  asetMobil = "asetMobil",
  asetMotor = "asetMotor",
  asetRumah = "asetRumah",
  asetTanah = "asetTanah",
  asetToko = "asetToko",
  asetWarung = "asetWarung",
  createdAt = "createdAt",
  createdBy = "createdBy",
  pendapatan = "pendapatan",
  sktm = "sktm",
  sktmUpload = "sktmUpload",
  stmKeterangan = "stmKeterangan",
  tanggunganAnak = "tanggunganAnak",
  tanggunganFamili = "tanggunganFamili",
  tanggunganLain = "tanggunganLain",
  tanggunganPasangan = "tanggunganPasangan",
  updatedAt = "updatedAt",
  updatedBy = "updatedBy",
  usiaSaatKlien = "usiaSaatKlien",
  person = "person",
  application = "application"
}
TypeGraphQL.registerEnumType(ClientScalarFieldEnum, {
  name: "ClientScalarFieldEnum",
  description: undefined,
});
