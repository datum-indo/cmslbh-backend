import * as TypeGraphQL from "type-graphql";
import { FindManyCaseProgressActivityArgs } from "./args/FindManyCaseProgressActivityArgs";
import { CaseProgressActivity } from "../../../models/CaseProgressActivity";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivity)
export class FindManyCaseProgressActivityResolver {
  @TypeGraphQL.Query(_returns => [CaseProgressActivity], {
    nullable: false
  })
  async caseProgressActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseProgressActivityArgs): Promise<CaseProgressActivity[]> {
    return getPrismaFromContext(ctx).caseProgressActivity.findMany(args);
  }
}
