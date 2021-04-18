import * as TypeGraphQL from "type-graphql";

export enum CasePkScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  createdBy = "createdBy",
  didampingi = "didampingi",
  legalMemo = "legalMemo",
  notulaRapat = "notulaRapat",
  targetAkhirAdvokasi = "targetAkhirAdvokasi",
  strategiAdvokasi = "strategiAdvokasi",
  statusAlasanTdk = "statusAlasanTdk",
  tglRapat = "tglRapat",
  updatedAt = "updatedAt",
  updatedBy = "updatedBy",
  pp_pendamping = "pp_pendamping"
}
TypeGraphQL.registerEnumType(CasePkScalarFieldEnum, {
  name: "CasePkScalarFieldEnum",
  description: undefined,
});
