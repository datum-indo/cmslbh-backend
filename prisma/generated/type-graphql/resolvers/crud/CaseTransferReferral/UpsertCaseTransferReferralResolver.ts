import * as TypeGraphQL from "type-graphql";
import { UpsertCaseTransferReferralArgs } from "./args/UpsertCaseTransferReferralArgs";
import { CaseTransferReferral } from "../../../models/CaseTransferReferral";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransferReferral)
export class UpsertCaseTransferReferralResolver {
  @TypeGraphQL.Mutation(_returns => CaseTransferReferral, {
    nullable: false
  })
  async upsertCaseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseTransferReferralArgs): Promise<CaseTransferReferral> {
    return getPrismaFromContext(ctx).caseTransferReferral.upsert(args);
  }
}
