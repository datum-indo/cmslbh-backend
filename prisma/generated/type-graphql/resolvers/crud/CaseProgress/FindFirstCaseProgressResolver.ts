import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseProgressArgs } from "./args/FindFirstCaseProgressArgs";
import { CaseProgress } from "../../../models/CaseProgress";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgress)
export class FindFirstCaseProgressResolver {
  @TypeGraphQL.Query(_returns => CaseProgress, {
    nullable: true
  })
  async findFirstCaseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseProgressArgs): Promise<CaseProgress | null> {
    return getPrismaFromContext(ctx).caseProgress.findFirst(args);
  }
}
