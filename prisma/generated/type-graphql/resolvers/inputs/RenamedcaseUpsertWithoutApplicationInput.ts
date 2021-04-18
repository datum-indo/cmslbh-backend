import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutApplicationInput } from "../inputs/RenamedcaseCreateWithoutApplicationInput";
import { RenamedcaseUpdateWithoutApplicationInput } from "../inputs/RenamedcaseUpdateWithoutApplicationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutApplicationInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutApplicationInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutApplicationInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutApplicationInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutApplicationInput;
}
