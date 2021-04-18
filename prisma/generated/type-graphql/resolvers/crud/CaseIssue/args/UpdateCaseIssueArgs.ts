import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseIssueUpdateInput } from "../../../inputs/CaseIssueUpdateInput";
import { CaseIssueWhereUniqueInput } from "../../../inputs/CaseIssueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseIssueArgs {
  @TypeGraphQL.Field(_type => CaseIssueUpdateInput, {
    nullable: false
  })
  data!: CaseIssueUpdateInput;

  @TypeGraphQL.Field(_type => CaseIssueWhereUniqueInput, {
    nullable: false
  })
  where!: CaseIssueWhereUniqueInput;
}
