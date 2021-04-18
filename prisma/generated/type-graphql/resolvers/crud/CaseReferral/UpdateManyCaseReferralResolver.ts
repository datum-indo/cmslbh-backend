import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseReferralArgs } from "./args/UpdateManyCaseReferralArgs";
import { CaseReferral } from "../../../models/CaseReferral";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseReferral)
export class UpdateManyCaseReferralResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseReferralArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseReferral.updateMany(args);
  }
}
