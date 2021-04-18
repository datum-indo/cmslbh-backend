import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateNestedOneWithoutIssuesInput } from "../inputs/RenamedcaseCreateNestedOneWithoutIssuesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseIssueCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kodeMt?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutIssuesInput, {
    nullable: true
  })
  caseId?: RenamedcaseCreateNestedOneWithoutIssuesInput | undefined;
}
