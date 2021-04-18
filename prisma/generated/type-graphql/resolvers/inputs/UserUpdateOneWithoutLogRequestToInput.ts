import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLogRequestToInput } from "../inputs/UserCreateOrConnectWithoutLogRequestToInput";
import { UserCreateWithoutLogRequestToInput } from "../inputs/UserCreateWithoutLogRequestToInput";
import { UserUpdateWithoutLogRequestToInput } from "../inputs/UserUpdateWithoutLogRequestToInput";
import { UserUpsertWithoutLogRequestToInput } from "../inputs/UserUpsertWithoutLogRequestToInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutLogRequestToInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLogRequestToInput, {
    nullable: true
  })
  create?: UserCreateWithoutLogRequestToInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLogRequestToInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLogRequestToInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutLogRequestToInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutLogRequestToInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutLogRequestToInput, {
    nullable: true
  })
  update?: UserUpdateWithoutLogRequestToInput | undefined;
}
