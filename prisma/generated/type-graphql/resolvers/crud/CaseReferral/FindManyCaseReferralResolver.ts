import * as TypeGraphQL from "type-graphql";
import { FindManyCaseReferralArgs } from "./args/FindManyCaseReferralArgs";
import { CaseReferral } from "../../../models/CaseReferral";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseReferral)
export class FindManyCaseReferralResolver {
  @TypeGraphQL.Query(_returns => [CaseReferral], {
    nullable: false
  })
  async caseReferrals(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseReferralArgs): Promise<CaseReferral[]> {
    return getPrismaFromContext(ctx).caseReferral.findMany(args);
  }
}
