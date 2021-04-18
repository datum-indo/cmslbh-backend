import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreateOrConnectWithoutPersonIdInput } from "../inputs/ClientCreateOrConnectWithoutPersonIdInput";
import { ClientCreateWithoutPersonIdInput } from "../inputs/ClientCreateWithoutPersonIdInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientCreateNestedManyWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => [ClientCreateWithoutPersonIdInput], {
    nullable: true
  })
  create?: ClientCreateWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientCreateOrConnectWithoutPersonIdInput], {
    nullable: true
  })
  connectOrCreate?: ClientCreateOrConnectWithoutPersonIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientWhereUniqueInput], {
    nullable: true
  })
  connect?: ClientWhereUniqueInput[] | undefined;
}
