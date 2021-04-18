import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseTransferReferralArgs } from "./args/FindFirstCaseTransferReferralArgs";
import { CaseTransferReferral } from "../../../models/CaseTransferReferral";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransferReferral)
export class FindFirstCaseTransferReferralResolver {
  @TypeGraphQL.Query(_returns => CaseTransferReferral, {
    nullable: true
  })
  async findFirstCaseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseTransferReferralArgs): Promise<CaseTransferReferral | null> {
    return getPrismaFromContext(ctx).caseTransferReferral.findFirst(args);
  }
}
