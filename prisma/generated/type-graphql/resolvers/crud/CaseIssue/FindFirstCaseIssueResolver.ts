import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseIssueArgs } from "./args/FindFirstCaseIssueArgs";
import { CaseIssue } from "../../../models/CaseIssue";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIssue)
export class FindFirstCaseIssueResolver {
  @TypeGraphQL.Query(_returns => CaseIssue, {
    nullable: true
  })
  async findFirstCaseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseIssueArgs): Promise<CaseIssue | null> {
    return getPrismaFromContext(ctx).caseIssue.findFirst(args);
  }
}
