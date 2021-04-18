import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateOrConnectWithoutTypeInput } from "../inputs/RoleCreateOrConnectWithoutTypeInput";
import { RoleCreateWithoutTypeInput } from "../inputs/RoleCreateWithoutTypeInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoleCreateNestedManyWithoutTypeInput {
  @TypeGraphQL.Field(_type => [RoleCreateWithoutTypeInput], {
    nullable: true
  })
  create?: RoleCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: RoleCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleWhereUniqueInput], {
    nullable: true
  })
  connect?: RoleWhereUniqueInput[] | undefined;
}
