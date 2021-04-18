import * as TypeGraphQL from "type-graphql";

export enum SrcAnalisaScalarFieldEnum {
  id = "id",
  group = "group",
  label = "label",
  field = "field",
  type = "type",
  source = "source",
  kode_list = "kode_list",
  alias = "alias"
}
TypeGraphQL.registerEnumType(SrcAnalisaScalarFieldEnum, {
  name: "SrcAnalisaScalarFieldEnum",
  description: undefined,
});
