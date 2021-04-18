import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutKorbansInput } from "../inputs/RenamedcaseCreateWithoutKorbansInput";
import { RenamedcaseUpdateWithoutKorbansInput } from "../inputs/RenamedcaseUpdateWithoutKorbansInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutKorbansInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutKorbansInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutKorbansInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutKorbansInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutKorbansInput;
}
