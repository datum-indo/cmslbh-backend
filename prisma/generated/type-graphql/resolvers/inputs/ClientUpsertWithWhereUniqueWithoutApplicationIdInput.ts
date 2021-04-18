import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreateWithoutApplicationIdInput } from "../inputs/ClientCreateWithoutApplicationIdInput";
import { ClientUpdateWithoutApplicationIdInput } from "../inputs/ClientUpdateWithoutApplicationIdInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpsertWithWhereUniqueWithoutApplicationIdInput {
  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: false
  })
  where!: ClientWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClientUpdateWithoutApplicationIdInput, {
    nullable: false
  })
  update!: ClientUpdateWithoutApplicationIdInput;

  @TypeGraphQL.Field(_type => ClientCreateWithoutApplicationIdInput, {
    nullable: false
  })
  create!: ClientCreateWithoutApplicationIdInput;
}
