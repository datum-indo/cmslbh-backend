import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseIssueArgs } from "./args/DeleteManyCaseIssueArgs";
import { CaseIssue } from "../../../models/CaseIssue";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseIssue)
export class DeleteManyCaseIssueResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseIssueArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseIssue.deleteMany(args);
  }
}
