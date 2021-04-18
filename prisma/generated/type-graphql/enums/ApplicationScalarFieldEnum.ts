import * as TypeGraphQL from "type-graphql";

export enum ApplicationScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  createdBy = "createdBy",
  dudukPerara = "dudukPerara",
  infoLbh = "infoLbh",
  jumlahPenerimaManfaat = "jumlahPenerimaManfaat",
  konfirmasiData = "konfirmasiData",
  noReg = "noReg",
  pernahKlien = "pernahKlien",
  pernahPpLain = "pernahPpLain",
  ppLain = "ppLain",
  regDate = "regDate",
  relasiWakilClient = "relasiWakilClient",
  setujuAdvokasi = "setujuAdvokasi",
  statusPerwakilan = "statusPerwakilan",
  updatedAt = "updatedAt",
  updatedBy = "updatedBy",
  waktuPernahKlien = "waktuPernahKlien",
  whyLbh = "whyLbh",
  tahap = "tahap",
  status = "status",
  wakil_Id = "wakil_Id",
  case_applicationTocase = "case_applicationTocase"
}
TypeGraphQL.registerEnumType(ApplicationScalarFieldEnum, {
  name: "ApplicationScalarFieldEnum",
  description: undefined,
});
