import * as TypeGraphQL from "type-graphql";
import { DeleteCaseIssueArgs } from "./args/DeleteCaseIssueArgs";
import { CaseIssue } from "../../../models/CaseIssue";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIssue)
export class DeleteCaseIssueResolver {
  @TypeGraphQL.Mutation(_returns => CaseIssue, {
    nullable: true
  })
  async deleteCaseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseIssueArgs): Promise<CaseIssue | null> {
    return getPrismaFromContext(ctx).caseIssue.delete(args);
  }
}
