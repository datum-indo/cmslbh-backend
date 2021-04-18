import * as TypeGraphQL from "type-graphql";
import { UpsertCaseReferralArgs } from "./args/UpsertCaseReferralArgs";
import { CaseReferral } from "../../../models/CaseReferral";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseReferral)
export class UpsertCaseReferralResolver {
  @TypeGraphQL.Mutation(_returns => CaseReferral, {
    nullable: false
  })
  async upsertCaseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseReferralArgs): Promise<CaseReferral> {
    return getPrismaFromContext(ctx).caseReferral.upsert(args);
  }
}
