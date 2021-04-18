import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseIssueOrderByInput } from "../../../inputs/CaseIssueOrderByInput";
import { CaseIssueWhereInput } from "../../../inputs/CaseIssueWhereInput";
import { CaseIssueWhereUniqueInput } from "../../../inputs/CaseIssueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCaseIssueArgs {
  @TypeGraphQL.Field(_type => CaseIssueWhereInput, {
    nullable: true
  })
  where?: CaseIssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseIssueOrderByInput], {
    nullable: true
  })
  orderBy?: CaseIssueOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseIssueWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseIssueWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
