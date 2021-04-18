import * as TypeGraphQL from "type-graphql";

export enum RenamedcaseScalarFieldEnum {
  id = "id",
  applicationId = "applicationId",
  caseClosed = "caseClosed",
  caseClosedJenis = "caseClosedJenis",
  createdAt = "createdAt",
  createdBy = "createdBy",
  hakTerlanggar = "hakTerlanggar",
  issue = "issue",
  judulKasus = "judulKasus",
  klasifikasiDok = "klasifikasiDok",
  kronologiKasus = "kronologiKasus",
  lockDitolak = "lockDitolak",
  statusPendampingan = "statusPendampingan",
  targetAdvokasi = "targetAdvokasi",
  unlockPk = "unlockPk",
  unlockTransfer = "unlockTransfer",
  pelakuKorbanRelasi = "pelakuKorbanRelasi",
  updatedAt = "updatedAt",
  updatedBy = "updatedBy",
  case_progresses = "case_progresses",
  case_transfer = "case_transfer",
  case_pk = "case_pk"
}
TypeGraphQL.registerEnumType(RenamedcaseScalarFieldEnum, {
  name: "RenamedcaseScalarFieldEnum",
  description: undefined,
});
