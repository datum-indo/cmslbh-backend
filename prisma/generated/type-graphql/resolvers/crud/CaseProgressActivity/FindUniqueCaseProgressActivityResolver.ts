import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseProgressActivityArgs } from "./args/FindUniqueCaseProgressActivityArgs";
import { CaseProgressActivity } from "../../../models/CaseProgressActivity";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivity)
export class FindUniqueCaseProgressActivityResolver {
  @TypeGraphQL.Query(_returns => CaseProgressActivity, {
    nullable: true
  })
  async caseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseProgressActivityArgs): Promise<CaseProgressActivity | null> {
    return getPrismaFromContext(ctx).caseProgressActivity.findUnique(args);
  }
}
