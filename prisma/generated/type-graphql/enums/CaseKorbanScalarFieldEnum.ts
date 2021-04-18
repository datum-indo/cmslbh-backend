import * as TypeGraphQL from "type-graphql";

export enum CaseKorbanScalarFieldEnum {
  id = "id",
  case_id = "case_id",
  person_id = "person_id",
  keterangan = "keterangan"
}
TypeGraphQL.registerEnumType(CaseKorbanScalarFieldEnum, {
  name: "CaseKorbanScalarFieldEnum",
  description: undefined,
});
