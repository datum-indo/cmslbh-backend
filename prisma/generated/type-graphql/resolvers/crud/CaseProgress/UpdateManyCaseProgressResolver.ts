import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseProgressArgs } from "./args/UpdateManyCaseProgressArgs";
import { CaseProgress } from "../../../models/CaseProgress";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgress)
export class UpdateManyCaseProgressResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseProgressArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseProgress.updateMany(args);
  }
}
