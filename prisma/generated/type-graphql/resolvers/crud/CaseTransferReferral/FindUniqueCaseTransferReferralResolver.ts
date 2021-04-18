import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseTransferReferralArgs } from "./args/FindUniqueCaseTransferReferralArgs";
import { CaseTransferReferral } from "../../../models/CaseTransferReferral";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransferReferral)
export class FindUniqueCaseTransferReferralResolver {
  @TypeGraphQL.Query(_returns => CaseTransferReferral, {
    nullable: true
  })
  async caseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseTransferReferralArgs): Promise<CaseTransferReferral | null> {
    return getPrismaFromContext(ctx).caseTransferReferral.findUnique(args);
  }
}
