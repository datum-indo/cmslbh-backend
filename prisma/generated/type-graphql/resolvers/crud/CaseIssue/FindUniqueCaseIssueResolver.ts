import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseIssueArgs } from "./args/FindUniqueCaseIssueArgs";
import { CaseIssue } from "../../../models/CaseIssue";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIssue)
export class FindUniqueCaseIssueResolver {
  @TypeGraphQL.Query(_returns => CaseIssue, {
    nullable: true
  })
  async caseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseIssueArgs): Promise<CaseIssue | null> {
    return getPrismaFromContext(ctx).caseIssue.findUnique(args);
  }
}
