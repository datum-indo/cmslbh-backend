import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLogRequestByInput } from "../inputs/UserCreateOrConnectWithoutLogRequestByInput";
import { UserCreateWithoutLogRequestByInput } from "../inputs/UserCreateWithoutLogRequestByInput";
import { UserUpdateWithoutLogRequestByInput } from "../inputs/UserUpdateWithoutLogRequestByInput";
import { UserUpsertWithoutLogRequestByInput } from "../inputs/UserUpsertWithoutLogRequestByInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutLogRequestByInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLogRequestByInput, {
    nullable: true
  })
  create?: UserCreateWithoutLogRequestByInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLogRequestByInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLogRequestByInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutLogRequestByInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutLogRequestByInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutLogRequestByInput, {
    nullable: true
  })
  update?: UserUpdateWithoutLogRequestByInput | undefined;
}
