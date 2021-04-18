import * as TypeGraphQL from "type-graphql";
import { CreateCaseIssueArgs } from "./args/CreateCaseIssueArgs";
import { CaseIssue } from "../../../models/CaseIssue";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIssue)
export class CreateCaseIssueResolver {
  @TypeGraphQL.Mutation(_returns => CaseIssue, {
    nullable: false
  })
  async createCaseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseIssueArgs): Promise<CaseIssue> {
    return getPrismaFromContext(ctx).caseIssue.create(args);
  }
}
