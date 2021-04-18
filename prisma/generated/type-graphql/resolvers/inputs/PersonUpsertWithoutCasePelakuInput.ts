import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutCasePelakuInput } from "../inputs/PersonCreateWithoutCasePelakuInput";
import { PersonUpdateWithoutCasePelakuInput } from "../inputs/PersonUpdateWithoutCasePelakuInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpsertWithoutCasePelakuInput {
  @TypeGraphQL.Field(_type => PersonUpdateWithoutCasePelakuInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutCasePelakuInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutCasePelakuInput, {
    nullable: false
  })
  create!: PersonCreateWithoutCasePelakuInput;
}
