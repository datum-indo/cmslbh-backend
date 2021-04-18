import * as TypeGraphQL from "type-graphql";

export enum CaseProgressScalarFieldEnum {
  id = "id",
  catatan = "catatan",
  createdAt = "createdAt",
  createdBy = "createdBy",
  jenisPeradilan = "jenisPeradilan",
  updatedAt = "updatedAt",
  updatedBy = "updatedBy"
}
TypeGraphQL.registerEnumType(CaseProgressScalarFieldEnum, {
  name: "CaseProgressScalarFieldEnum",
  description: undefined,
});
