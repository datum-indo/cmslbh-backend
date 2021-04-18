import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLogRequestToInput } from "../inputs/UserCreateOrConnectWithoutLogRequestToInput";
import { UserCreateWithoutLogRequestToInput } from "../inputs/UserCreateWithoutLogRequestToInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutLogRequestToInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLogRequestToInput, {
    nullable: true
  })
  create?: UserCreateWithoutLogRequestToInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLogRequestToInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLogRequestToInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
