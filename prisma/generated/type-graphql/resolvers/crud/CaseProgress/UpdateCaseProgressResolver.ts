import * as TypeGraphQL from "type-graphql";
import { UpdateCaseProgressArgs } from "./args/UpdateCaseProgressArgs";
import { CaseProgress } from "../../../models/CaseProgress";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgress)
export class UpdateCaseProgressResolver {
  @TypeGraphQL.Mutation(_returns => CaseProgress, {
    nullable: true
  })
  async updateCaseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseProgressArgs): Promise<CaseProgress | null> {
    return getPrismaFromContext(ctx).caseProgress.update(args);
  }
}
