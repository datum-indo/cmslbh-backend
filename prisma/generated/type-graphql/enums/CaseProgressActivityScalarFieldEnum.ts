import * as TypeGraphQL from "type-graphql";

export enum CaseProgressActivityScalarFieldEnum {
  id = "id",
  capaian = "capaian",
  createdAt = "createdAt",
  createdBy = "createdBy",
  hambatan = "hambatan",
  judulAktifitas = "judulAktifitas",
  position = "position",
  rencanaStrategi = "rencanaStrategi",
  targetAdvokasi = "targetAdvokasi",
  tglAktifitas = "tglAktifitas",
  updatedAt = "updatedAt",
  updatedBy = "updatedBy",
  case_id = "case_id"
}
TypeGraphQL.registerEnumType(CaseProgressActivityScalarFieldEnum, {
  name: "CaseProgressActivityScalarFieldEnum",
  description: undefined,
});
