import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLogRequestByInput } from "../inputs/UserCreateOrConnectWithoutLogRequestByInput";
import { UserCreateWithoutLogRequestByInput } from "../inputs/UserCreateWithoutLogRequestByInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutLogRequestByInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLogRequestByInput, {
    nullable: true
  })
  create?: UserCreateWithoutLogRequestByInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLogRequestByInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLogRequestByInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
