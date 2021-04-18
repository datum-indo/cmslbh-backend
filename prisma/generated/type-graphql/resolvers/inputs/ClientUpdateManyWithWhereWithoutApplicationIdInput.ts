import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClientScalarWhereInput } from "../inputs/ClientScalarWhereInput";
import { ClientUpdateManyMutationInput } from "../inputs/ClientUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpdateManyWithWhereWithoutApplicationIdInput {
  @TypeGraphQL.Field(_type => ClientScalarWhereInput, {
    nullable: false
  })
  where!: ClientScalarWhereInput;

  @TypeGraphQL.Field(_type => ClientUpdateManyMutationInput, {
    nullable: false
  })
  data!: ClientUpdateManyMutationInput;
}
