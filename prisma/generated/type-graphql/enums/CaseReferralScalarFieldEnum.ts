import * as TypeGraphQL from "type-graphql";

export enum CaseReferralScalarFieldEnum {
  id = "id",
  tglTransfer = "tglTransfer",
  catatan = "catatan",
  createdBy = "createdBy",
  updatedBy = "updatedBy",
  caseId = "caseId",
  networkId = "networkId",
  clientId = "clientId"
}
TypeGraphQL.registerEnumType(CaseReferralScalarFieldEnum, {
  name: "CaseReferralScalarFieldEnum",
  description: undefined,
});
