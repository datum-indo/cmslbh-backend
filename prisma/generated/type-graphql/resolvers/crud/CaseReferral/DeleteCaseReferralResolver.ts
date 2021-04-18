import * as TypeGraphQL from "type-graphql";
import { DeleteCaseReferralArgs } from "./args/DeleteCaseReferralArgs";
import { CaseReferral } from "../../../models/CaseReferral";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseReferral)
export class DeleteCaseReferralResolver {
  @TypeGraphQL.Mutation(_returns => CaseReferral, {
    nullable: true
  })
  async deleteCaseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseReferralArgs): Promise<CaseReferral | null> {
    return getPrismaFromContext(ctx).caseReferral.delete(args);
  }
}
