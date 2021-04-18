import * as TypeGraphQL from "type-graphql";
import { FindManyCaseProgressArgs } from "./args/FindManyCaseProgressArgs";
import { CaseProgress } from "../../../models/CaseProgress";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgress)
export class FindManyCaseProgressResolver {
  @TypeGraphQL.Query(_returns => [CaseProgress], {
    nullable: false
  })
  async caseProgresses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseProgressArgs): Promise<CaseProgress[]> {
    return getPrismaFromContext(ctx).caseProgress.findMany(args);
  }
}
