import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLogRequestAppInput } from "../inputs/UserCreateOrConnectWithoutLogRequestAppInput";
import { UserCreateWithoutLogRequestAppInput } from "../inputs/UserCreateWithoutLogRequestAppInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutLogRequestAppInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLogRequestAppInput, {
    nullable: true
  })
  create?: UserCreateWithoutLogRequestAppInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLogRequestAppInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLogRequestAppInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
