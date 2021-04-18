import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseProgressArgs } from "./args/DeleteManyCaseProgressArgs";
import { CaseProgress } from "../../../models/CaseProgress";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgress)
export class DeleteManyCaseProgressResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseProgressArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseProgress.deleteMany(args);
  }
}
