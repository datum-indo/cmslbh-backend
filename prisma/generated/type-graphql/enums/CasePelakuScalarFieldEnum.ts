import * as TypeGraphQL from "type-graphql";

export enum CasePelakuScalarFieldEnum {
  id = "id",
  jenisPelaku = "jenisPelaku",
  case_id = "case_id",
  person_id = "person_id"
}
TypeGraphQL.registerEnumType(CasePelakuScalarFieldEnum, {
  name: "CasePelakuScalarFieldEnum",
  description: undefined,
});
