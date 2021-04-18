import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutDocumentsInput } from "../inputs/PersonCreateWithoutDocumentsInput";
import { PersonUpdateWithoutDocumentsInput } from "../inputs/PersonUpdateWithoutDocumentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpsertWithoutDocumentsInput {
  @TypeGraphQL.Field(_type => PersonUpdateWithoutDocumentsInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutDocumentsInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutDocumentsInput, {
    nullable: false
  })
  create!: PersonCreateWithoutDocumentsInput;
}
