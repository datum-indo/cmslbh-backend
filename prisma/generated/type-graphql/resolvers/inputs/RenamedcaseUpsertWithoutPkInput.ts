import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutPkInput } from "../inputs/RenamedcaseCreateWithoutPkInput";
import { RenamedcaseUpdateWithoutPkInput } from "../inputs/RenamedcaseUpdateWithoutPkInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutPkInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutPkInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutPkInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutPkInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutPkInput;
}
