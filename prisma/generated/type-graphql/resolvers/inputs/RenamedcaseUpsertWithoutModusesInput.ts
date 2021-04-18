import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutModusesInput } from "../inputs/RenamedcaseCreateWithoutModusesInput";
import { RenamedcaseUpdateWithoutModusesInput } from "../inputs/RenamedcaseUpdateWithoutModusesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutModusesInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutModusesInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutModusesInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutModusesInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutModusesInput;
}
