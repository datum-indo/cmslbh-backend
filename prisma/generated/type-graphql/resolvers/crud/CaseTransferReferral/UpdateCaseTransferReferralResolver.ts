import * as TypeGraphQL from "type-graphql";
import { UpdateCaseTransferReferralArgs } from "./args/UpdateCaseTransferReferralArgs";
import { CaseTransferReferral } from "../../../models/CaseTransferReferral";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransferReferral)
export class UpdateCaseTransferReferralResolver {
  @TypeGraphQL.Mutation(_returns => CaseTransferReferral, {
    nullable: true
  })
  async updateCaseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseTransferReferralArgs): Promise<CaseTransferReferral | null> {
    return getPrismaFromContext(ctx).caseTransferReferral.update(args);
  }
}
