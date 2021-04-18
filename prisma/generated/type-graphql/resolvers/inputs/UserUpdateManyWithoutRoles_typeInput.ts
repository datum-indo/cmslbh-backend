import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRoles_typeInput } from "../inputs/UserCreateOrConnectWithoutRoles_typeInput";
import { UserCreateWithoutRoles_typeInput } from "../inputs/UserCreateWithoutRoles_typeInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutRoles_typeInput } from "../inputs/UserUpdateManyWithWhereWithoutRoles_typeInput";
import { UserUpdateWithWhereUniqueWithoutRoles_typeInput } from "../inputs/UserUpdateWithWhereUniqueWithoutRoles_typeInput";
import { UserUpsertWithWhereUniqueWithoutRoles_typeInput } from "../inputs/UserUpsertWithWhereUniqueWithoutRoles_typeInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateManyWithoutRoles_typeInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutRoles_typeInput], {
    nullable: true
  })
  create?: UserCreateWithoutRoles_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutRoles_typeInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRoles_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutRoles_typeInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutRoles_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutRoles_typeInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutRoles_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutRoles_typeInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutRoles_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
