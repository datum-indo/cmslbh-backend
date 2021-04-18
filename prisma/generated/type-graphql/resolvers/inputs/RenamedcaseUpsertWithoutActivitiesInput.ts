import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutActivitiesInput } from "../inputs/RenamedcaseCreateWithoutActivitiesInput";
import { RenamedcaseUpdateWithoutActivitiesInput } from "../inputs/RenamedcaseUpdateWithoutActivitiesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutActivitiesInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutActivitiesInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutActivitiesInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutActivitiesInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutActivitiesInput;
}
