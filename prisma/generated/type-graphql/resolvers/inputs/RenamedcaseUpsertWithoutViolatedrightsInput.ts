import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutViolatedrightsInput } from "../inputs/RenamedcaseCreateWithoutViolatedrightsInput";
import { RenamedcaseUpdateWithoutViolatedrightsInput } from "../inputs/RenamedcaseUpdateWithoutViolatedrightsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutViolatedrightsInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutViolatedrightsInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutViolatedrightsInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutViolatedrightsInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutViolatedrightsInput;
}
