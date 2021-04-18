import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutClientsInput } from "../inputs/PersonCreateWithoutClientsInput";
import { PersonUpdateWithoutClientsInput } from "../inputs/PersonUpdateWithoutClientsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpsertWithoutClientsInput {
  @TypeGraphQL.Field(_type => PersonUpdateWithoutClientsInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutClientsInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutClientsInput, {
    nullable: false
  })
  create!: PersonCreateWithoutClientsInput;
}
