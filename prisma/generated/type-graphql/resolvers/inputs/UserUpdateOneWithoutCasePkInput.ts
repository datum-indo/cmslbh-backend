import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCasePkInput } from "../inputs/UserCreateOrConnectWithoutCasePkInput";
import { UserCreateWithoutCasePkInput } from "../inputs/UserCreateWithoutCasePkInput";
import { UserUpdateWithoutCasePkInput } from "../inputs/UserUpdateWithoutCasePkInput";
import { UserUpsertWithoutCasePkInput } from "../inputs/UserUpsertWithoutCasePkInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutCasePkInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCasePkInput, {
    nullable: true
  })
  create?: UserCreateWithoutCasePkInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCasePkInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCasePkInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCasePkInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCasePkInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutCasePkInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCasePkInput | undefined;
}
