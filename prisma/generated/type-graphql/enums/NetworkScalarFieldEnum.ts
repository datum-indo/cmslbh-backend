import * as TypeGraphQL from "type-graphql";

export enum NetworkScalarFieldEnum {
  id = "id",
  address = "address",
  contactPerson = "contactPerson",
  createdAt = "createdAt",
  email = "email",
  name = "name",
  noContact = "noContact",
  provinceId = "provinceId",
  regencyId = "regencyId",
  type = "type",
  status = "status",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(NetworkScalarFieldEnum, {
  name: "NetworkScalarFieldEnum",
  description: undefined,
});
