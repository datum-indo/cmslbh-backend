import * as TypeGraphQL from "type-graphql";

export enum UserProfileScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  noContact = "noContact",
  occupation = "occupation",
  photo = "photo",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(UserProfileScalarFieldEnum, {
  name: "UserProfileScalarFieldEnum",
  description: undefined,
});
