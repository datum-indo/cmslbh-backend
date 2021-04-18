import * as TypeGraphQL from "type-graphql";
import { UpdateCaseIssueArgs } from "./args/UpdateCaseIssueArgs";
import { CaseIssue } from "../../../models/CaseIssue";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIssue)
export class UpdateCaseIssueResolver {
  @TypeGraphQL.Mutation(_returns => CaseIssue, {
    nullable: true
  })
  async updateCaseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseIssueArgs): Promise<CaseIssue | null> {
    return getPrismaFromContext(ctx).caseIssue.update(args);
  }
}
