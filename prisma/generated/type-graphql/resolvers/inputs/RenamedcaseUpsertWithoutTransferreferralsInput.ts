import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutTransferreferralsInput } from "../inputs/RenamedcaseCreateWithoutTransferreferralsInput";
import { RenamedcaseUpdateWithoutTransferreferralsInput } from "../inputs/RenamedcaseUpdateWithoutTransferreferralsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutTransferreferralsInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutTransferreferralsInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutTransferreferralsInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutTransferreferralsInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutTransferreferralsInput;
}
