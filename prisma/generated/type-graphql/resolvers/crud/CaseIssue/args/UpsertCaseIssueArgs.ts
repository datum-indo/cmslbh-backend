import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseIssueCreateInput } from "../../../inputs/CaseIssueCreateInput";
import { CaseIssueUpdateInput } from "../../../inputs/CaseIssueUpdateInput";
import { CaseIssueWhereUniqueInput } from "../../../inputs/CaseIssueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseIssueArgs {
  @TypeGraphQL.Field(_type => CaseIssueWhereUniqueInput, {
    nullable: false
  })
  where!: CaseIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseIssueCreateInput, {
    nullable: false
  })
  create!: CaseIssueCreateInput;

  @TypeGraphQL.Field(_type => CaseIssueUpdateInput, {
    nullable: false
  })
  update!: CaseIssueUpdateInput;
}
