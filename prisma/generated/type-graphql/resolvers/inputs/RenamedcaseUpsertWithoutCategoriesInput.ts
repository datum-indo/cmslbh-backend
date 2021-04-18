import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutCategoriesInput } from "../inputs/RenamedcaseCreateWithoutCategoriesInput";
import { RenamedcaseUpdateWithoutCategoriesInput } from "../inputs/RenamedcaseUpdateWithoutCategoriesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutCategoriesInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutCategoriesInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutCategoriesInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutCategoriesInput;
}
