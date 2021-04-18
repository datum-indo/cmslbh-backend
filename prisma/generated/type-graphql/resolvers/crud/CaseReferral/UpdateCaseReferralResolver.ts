import * as TypeGraphQL from "type-graphql";
import { UpdateCaseReferralArgs } from "./args/UpdateCaseReferralArgs";
import { CaseReferral } from "../../../models/CaseReferral";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseReferral)
export class UpdateCaseReferralResolver {
  @TypeGraphQL.Mutation(_returns => CaseReferral, {
    nullable: true
  })
  async updateCaseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseReferralArgs): Promise<CaseReferral | null> {
    return getPrismaFromContext(ctx).caseReferral.update(args);
  }
}
