import * as TypeGraphQL from "type-graphql";

export enum PersonDocumentScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  deletedAt = "deletedAt",
  file = "file",
  title = "title",
  updatedAt = "updatedAt",
  personId = "personId"
}
TypeGraphQL.registerEnumType(PersonDocumentScalarFieldEnum, {
  name: "PersonDocumentScalarFieldEnum",
  description: undefined,
});
