import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutCaseKorbanInput } from "../inputs/PersonCreateWithoutCaseKorbanInput";
import { PersonUpdateWithoutCaseKorbanInput } from "../inputs/PersonUpdateWithoutCaseKorbanInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpsertWithoutCaseKorbanInput {
  @TypeGraphQL.Field(_type => PersonUpdateWithoutCaseKorbanInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutCaseKorbanInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutCaseKorbanInput, {
    nullable: false
  })
  create!: PersonCreateWithoutCaseKorbanInput;
}
