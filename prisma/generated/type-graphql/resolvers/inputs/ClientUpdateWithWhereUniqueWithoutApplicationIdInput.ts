import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientUpdateWithoutApplicationIdInput } from "../inputs/ClientUpdateWithoutApplicationIdInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpdateWithWhereUniqueWithoutApplicationIdInput {
  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: false
  })
  where!: ClientWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClientUpdateWithoutApplicationIdInput, {
    nullable: false
  })
  data!: ClientUpdateWithoutApplicationIdInput;
}
