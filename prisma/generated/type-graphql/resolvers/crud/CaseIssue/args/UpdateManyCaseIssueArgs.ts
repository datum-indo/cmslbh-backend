import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseIssueUpdateManyMutationInput } from "../../../inputs/CaseIssueUpdateManyMutationInput";
import { CaseIssueWhereInput } from "../../../inputs/CaseIssueWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseIssueArgs {
  @TypeGraphQL.Field(_type => CaseIssueUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseIssueUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseIssueWhereInput, {
    nullable: true
  })
  where?: CaseIssueWhereInput | undefined;
}
