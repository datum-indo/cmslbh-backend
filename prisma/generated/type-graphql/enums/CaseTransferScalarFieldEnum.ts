import * as TypeGraphQL from "type-graphql";

export enum CaseTransferScalarFieldEnum {
  id = "id",
  tglTransfer = "tglTransfer",
  catatan = "catatan",
  createdBy = "createdBy",
  updatedBy = "updatedBy",
  networkId = "networkId"
}
TypeGraphQL.registerEnumType(CaseTransferScalarFieldEnum, {
  name: "CaseTransferScalarFieldEnum",
  description: undefined,
});
