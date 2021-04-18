import * as TypeGraphQL from "type-graphql";

export enum RoleScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  typeRole = "typeRole"
}
TypeGraphQL.registerEnumType(RoleScalarFieldEnum, {
  name: "RoleScalarFieldEnum",
  description: undefined,
});
