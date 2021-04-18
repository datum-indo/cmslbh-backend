import * as TypeGraphQL from "type-graphql";
import { DeleteCaseProgressArgs } from "./args/DeleteCaseProgressArgs";
import { CaseProgress } from "../../../models/CaseProgress";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgress)
export class DeleteCaseProgressResolver {
  @TypeGraphQL.Mutation(_returns => CaseProgress, {
    nullable: true
  })
  async deleteCaseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseProgressArgs): Promise<CaseProgress | null> {
    return getPrismaFromContext(ctx).caseProgress.delete(args);
  }
}
