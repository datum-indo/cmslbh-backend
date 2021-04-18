import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRoles_typeInput } from "../inputs/UserCreateOrConnectWithoutRoles_typeInput";
import { UserCreateWithoutRoles_typeInput } from "../inputs/UserCreateWithoutRoles_typeInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedManyWithoutRoles_typeInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutRoles_typeInput], {
    nullable: true
  })
  create?: UserCreateWithoutRoles_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutRoles_typeInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRoles_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
