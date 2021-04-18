import * as TypeGraphQL from "type-graphql";

export enum DataDictScalarFieldEnum {
  fieldNumber = "fieldNumber",
  dataType = "dataType",
  entity = "entity",
  fieldName = "fieldName",
  fieldType = "fieldType",
  isRepeat = "isRepeat",
  linkField = "linkField",
  linkTable = "linkTable",
  listCode = "listCode",
  required = "required",
  validation = "validation",
  visibleSelectQuery = "visibleSelectQuery"
}
TypeGraphQL.registerEnumType(DataDictScalarFieldEnum, {
  name: "DataDictScalarFieldEnum",
  description: undefined,
});
