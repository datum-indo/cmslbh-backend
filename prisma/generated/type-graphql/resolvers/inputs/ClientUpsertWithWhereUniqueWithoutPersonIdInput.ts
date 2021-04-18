import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientCreateWithoutPersonIdInput } from "../inputs/ClientCreateWithoutPersonIdInput";
import { ClientUpdateWithoutPersonIdInput } from "../inputs/ClientUpdateWithoutPersonIdInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpsertWithWhereUniqueWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: false
  })
  where!: ClientWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClientUpdateWithoutPersonIdInput, {
    nullable: false
  })
  update!: ClientUpdateWithoutPersonIdInput;

  @TypeGraphQL.Field(_type => ClientCreateWithoutPersonIdInput, {
    nullable: false
  })
  create!: ClientCreateWithoutPersonIdInput;
}
