import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientUpdateWithoutLogRequestInput } from "../inputs/ClientUpdateWithoutLogRequestInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpdateWithWhereUniqueWithoutLogRequestInput {
  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: false
  })
  where!: ClientWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClientUpdateWithoutLogRequestInput, {
    nullable: false
  })
  data!: ClientUpdateWithoutLogRequestInput;
}
