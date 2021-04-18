import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseReferralArgs } from "./args/FindFirstCaseReferralArgs";
import { CaseReferral } from "../../../models/CaseReferral";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseReferral)
export class FindFirstCaseReferralResolver {
  @TypeGraphQL.Query(_returns => CaseReferral, {
    nullable: true
  })
  async findFirstCaseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseReferralArgs): Promise<CaseReferral | null> {
    return getPrismaFromContext(ctx).caseReferral.findFirst(args);
  }
}
