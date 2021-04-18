import * as TypeGraphQL from "type-graphql";
import { UpsertCaseIssueArgs } from "./args/UpsertCaseIssueArgs";
import { CaseIssue } from "../../../models/CaseIssue";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIssue)
export class UpsertCaseIssueResolver {
  @TypeGraphQL.Mutation(_returns => CaseIssue, {
    nullable: false
  })
  async upsertCaseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseIssueArgs): Promise<CaseIssue> {
    return getPrismaFromContext(ctx).caseIssue.upsert(args);
  }
}
