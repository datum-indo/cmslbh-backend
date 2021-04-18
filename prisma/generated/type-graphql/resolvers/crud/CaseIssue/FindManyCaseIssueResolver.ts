import * as TypeGraphQL from "type-graphql";
import { FindManyCaseIssueArgs } from "./args/FindManyCaseIssueArgs";
import { CaseIssue } from "../../../models/CaseIssue";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIssue)
export class FindManyCaseIssueResolver {
  @TypeGraphQL.Query(_returns => [CaseIssue], {
    nullable: false
  })
  async caseIssues(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseIssueArgs): Promise<CaseIssue[]> {
    return getPrismaFromContext(ctx).caseIssue.findMany(args);
  }
}
