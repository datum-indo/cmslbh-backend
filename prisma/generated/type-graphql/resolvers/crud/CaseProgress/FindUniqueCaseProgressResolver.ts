import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseProgressArgs } from "./args/FindUniqueCaseProgressArgs";
import { CaseProgress } from "../../../models/CaseProgress";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgress)
export class FindUniqueCaseProgressResolver {
  @TypeGraphQL.Query(_returns => CaseProgress, {
    nullable: true
  })
  async caseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseProgressArgs): Promise<CaseProgress | null> {
    return getPrismaFromContext(ctx).caseProgress.findUnique(args);
  }
}
