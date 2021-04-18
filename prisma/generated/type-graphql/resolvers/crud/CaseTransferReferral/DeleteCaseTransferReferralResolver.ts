import * as TypeGraphQL from "type-graphql";
import { DeleteCaseTransferReferralArgs } from "./args/DeleteCaseTransferReferralArgs";
import { CaseTransferReferral } from "../../../models/CaseTransferReferral";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransferReferral)
export class DeleteCaseTransferReferralResolver {
  @TypeGraphQL.Mutation(_returns => CaseTransferReferral, {
    nullable: true
  })
  async deleteCaseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseTransferReferralArgs): Promise<CaseTransferReferral | null> {
    return getPrismaFromContext(ctx).caseTransferReferral.delete(args);
  }
}
