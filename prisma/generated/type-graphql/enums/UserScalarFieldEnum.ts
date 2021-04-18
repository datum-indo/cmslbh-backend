import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  address = "address",
  avatar = "avatar",
  createdAt = "createdAt",
  deletedAt = "deletedAt",
  email = "email",
  name = "name",
  password = "password",
  phone = "phone",
  position = "position",
  rememberToken = "rememberToken",
  roles = "roles",
  status = "status",
  updatedAt = "updatedAt",
  username = "username",
  userProfileId = "userProfileId"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
