import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseIssueCreateInput } from "../../../inputs/CaseIssueCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseIssueArgs {
  @TypeGraphQL.Field(_type => CaseIssueCreateInput, {
    nullable: false
  })
  data!: CaseIssueCreateInput;
}
