import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseIssueWhereInput } from "../../../inputs/CaseIssueWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseIssueArgs {
  @TypeGraphQL.Field(_type => CaseIssueWhereInput, {
    nullable: true
  })
  where?: CaseIssueWhereInput | undefined;
}
