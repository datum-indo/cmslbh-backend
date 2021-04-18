import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseTransferReferralArgs } from "./args/DeleteManyCaseTransferReferralArgs";
import { CaseTransferReferral } from "../../../models/CaseTransferReferral";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransferReferral)
export class DeleteManyCaseTransferReferralResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseTransferReferralArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseTransferReferral.deleteMany(args);
  }
}
