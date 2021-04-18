import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutProgressesInput } from "../inputs/RenamedcaseCreateWithoutProgressesInput";
import { RenamedcaseUpdateWithoutProgressesInput } from "../inputs/RenamedcaseUpdateWithoutProgressesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutProgressesInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutProgressesInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutProgressesInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutProgressesInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutProgressesInput;
}
