import * as TypeGraphQL from "type-graphql";
import { FindManyCaseTransferReferralArgs } from "./args/FindManyCaseTransferReferralArgs";
import { CaseTransferReferral } from "../../../models/CaseTransferReferral";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransferReferral)
export class FindManyCaseTransferReferralResolver {
  @TypeGraphQL.Query(_returns => [CaseTransferReferral], {
    nullable: false
  })
  async caseTransferReferrals(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseTransferReferralArgs): Promise<CaseTransferReferral[]> {
    return getPrismaFromContext(ctx).caseTransferReferral.findMany(args);
  }
}
