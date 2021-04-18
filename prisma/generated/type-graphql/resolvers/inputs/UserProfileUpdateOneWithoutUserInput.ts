import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutUserInput } from "../inputs/UserProfileCreateOrConnectWithoutUserInput";
import { UserProfileCreateWithoutUserInput } from "../inputs/UserProfileCreateWithoutUserInput";
import { UserProfileUpdateWithoutUserInput } from "../inputs/UserProfileUpdateWithoutUserInput";
import { UserProfileUpsertWithoutUserInput } from "../inputs/UserProfileUpsertWithoutUserInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserProfileUpdateOneWithoutUserInput {
  @TypeGraphQL.Field(_type => UserProfileCreateWithoutUserInput, {
    nullable: true
  })
  create?: UserProfileCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: UserProfileUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutUserInput, {
    nullable: true
  })
  update?: UserProfileUpdateWithoutUserInput | undefined;
}
