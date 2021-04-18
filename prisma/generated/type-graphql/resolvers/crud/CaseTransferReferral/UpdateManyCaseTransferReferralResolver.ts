import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseTransferReferralArgs } from "./args/UpdateManyCaseTransferReferralArgs";
import { CaseTransferReferral } from "../../../models/CaseTransferReferral";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransferReferral)
export class UpdateManyCaseTransferReferralResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseTransferReferralArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseTransferReferral.updateMany(args);
  }
}
