import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateOrConnectWithoutUserInput } from "../inputs/RoleCreateOrConnectWithoutUserInput";
import { RoleCreateWithoutUserInput } from "../inputs/RoleCreateWithoutUserInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoleCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [RoleCreateWithoutUserInput], {
    nullable: true
  })
  create?: RoleCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: RoleCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleWhereUniqueInput], {
    nullable: true
  })
  connect?: RoleWhereUniqueInput[] | undefined;
}
