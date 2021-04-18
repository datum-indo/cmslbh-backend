import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseIssueWhereUniqueInput } from "../../../inputs/CaseIssueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCaseIssueArgs {
  @TypeGraphQL.Field(_type => CaseIssueWhereUniqueInput, {
    nullable: false
  })
  where!: CaseIssueWhereUniqueInput;
}
