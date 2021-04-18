import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreateOrConnectWithoutApplicationIdInput } from "../inputs/ClientCreateOrConnectWithoutApplicationIdInput";
import { ClientCreateWithoutApplicationIdInput } from "../inputs/ClientCreateWithoutApplicationIdInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientCreateNestedManyWithoutApplicationIdInput {
  @TypeGraphQL.Field(_type => [ClientCreateWithoutApplicationIdInput], {
    nullable: true
  })
  create?: ClientCreateWithoutApplicationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientCreateOrConnectWithoutApplicationIdInput], {
    nullable: true
  })
  connectOrCreate?: ClientCreateOrConnectWithoutApplicationIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientWhereUniqueInput], {
    nullable: true
  })
  connect?: ClientWhereUniqueInput[] | undefined;
}
