import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseReferralArgs } from "./args/FindUniqueCaseReferralArgs";
import { CaseReferral } from "../../../models/CaseReferral";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseReferral)
export class FindUniqueCaseReferralResolver {
  @TypeGraphQL.Query(_returns => CaseReferral, {
    nullable: true
  })
  async caseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseReferralArgs): Promise<CaseReferral | null> {
    return getPrismaFromContext(ctx).caseReferral.findUnique(args);
  }
}
