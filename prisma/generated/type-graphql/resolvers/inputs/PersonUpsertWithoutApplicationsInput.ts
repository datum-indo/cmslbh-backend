import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutApplicationsInput } from "../inputs/PersonCreateWithoutApplicationsInput";
import { PersonUpdateWithoutApplicationsInput } from "../inputs/PersonUpdateWithoutApplicationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpsertWithoutApplicationsInput {
  @TypeGraphQL.Field(_type => PersonUpdateWithoutApplicationsInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutApplicationsInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutApplicationsInput, {
    nullable: false
  })
  create!: PersonCreateWithoutApplicationsInput;
}
