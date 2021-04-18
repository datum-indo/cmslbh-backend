import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseIssueArgs } from "./args/UpdateManyCaseIssueArgs";
import { CaseIssue } from "../../../models/CaseIssue";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIssue)
export class UpdateManyCaseIssueResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseIssueArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseIssue.updateMany(args);
  }
}
