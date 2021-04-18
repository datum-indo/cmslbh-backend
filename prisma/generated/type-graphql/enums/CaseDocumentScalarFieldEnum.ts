import * as TypeGraphQL from "type-graphql";

export enum CaseDocumentScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  createdBy = "createdBy",
  jenisDokumen = "jenisDokumen",
  judulDokumen = "judulDokumen",
  keterangan = "keterangan",
  link = "link",
  filename = "filename",
  updatedAt = "updatedAt",
  updatedBy = "updatedBy",
  caseId = "caseId"
}
TypeGraphQL.registerEnumType(CaseDocumentScalarFieldEnum, {
  name: "CaseDocumentScalarFieldEnum",
  description: undefined,
});
