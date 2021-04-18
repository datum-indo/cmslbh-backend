import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutIssuesInput } from "../inputs/RenamedcaseCreateWithoutIssuesInput";
import { RenamedcaseUpdateWithoutIssuesInput } from "../inputs/RenamedcaseUpdateWithoutIssuesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutIssuesInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutIssuesInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutIssuesInput;
}
