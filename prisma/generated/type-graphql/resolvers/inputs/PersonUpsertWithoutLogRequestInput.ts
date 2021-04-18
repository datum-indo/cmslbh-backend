import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutLogRequestInput } from "../inputs/PersonCreateWithoutLogRequestInput";
import { PersonUpdateWithoutLogRequestInput } from "../inputs/PersonUpdateWithoutLogRequestInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpsertWithoutLogRequestInput {
  @TypeGraphQL.Field(_type => PersonUpdateWithoutLogRequestInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutLogRequestInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutLogRequestInput, {
    nullable: false
  })
  create!: PersonCreateWithoutLogRequestInput;
}
