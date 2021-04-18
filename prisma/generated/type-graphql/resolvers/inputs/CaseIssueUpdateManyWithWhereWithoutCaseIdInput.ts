import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseIssueScalarWhereInput } from "../inputs/CaseIssueScalarWhereInput";
import { CaseIssueUpdateManyMutationInput } from "../inputs/CaseIssueUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseIssueUpdateManyWithWhereWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseIssueScalarWhereInput, {
    nullable: false
  })
  where!: CaseIssueScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseIssueUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseIssueUpdateManyMutationInput;
}
