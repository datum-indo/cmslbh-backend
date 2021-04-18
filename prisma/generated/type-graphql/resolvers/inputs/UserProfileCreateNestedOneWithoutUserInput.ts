import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutUserInput } from "../inputs/UserProfileCreateOrConnectWithoutUserInput";
import { UserProfileCreateWithoutUserInput } from "../inputs/UserProfileCreateWithoutUserInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => UserProfileCreateWithoutUserInput, {
    nullable: true
  })
  create?: UserProfileCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput | undefined;
}
