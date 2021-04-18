import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutIssuesInput } from "../inputs/RenamedcaseCreateWithoutIssuesInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseCreateOrConnectWithoutIssuesInput {
  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: false
  })
  where!: RenamedcaseWhereUniqueInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutIssuesInput;
}
