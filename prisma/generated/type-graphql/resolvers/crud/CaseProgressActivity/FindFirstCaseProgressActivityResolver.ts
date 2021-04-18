import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseProgressActivityArgs } from "./args/FindFirstCaseProgressActivityArgs";
import { CaseProgressActivity } from "../../../models/CaseProgressActivity";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivity)
export class FindFirstCaseProgressActivityResolver {
  @TypeGraphQL.Query(_returns => CaseProgressActivity, {
    nullable: true
  })
  async findFirstCaseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseProgressActivityArgs): Promise<CaseProgressActivity | null> {
    return getPrismaFromContext(ctx).caseProgressActivity.findFirst(args);
  }
}
