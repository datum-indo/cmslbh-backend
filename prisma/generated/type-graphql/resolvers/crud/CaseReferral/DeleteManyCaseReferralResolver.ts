import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseReferralArgs } from "./args/DeleteManyCaseReferralArgs";
import { CaseReferral } from "../../../models/CaseReferral";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseReferral)
export class DeleteManyCaseReferralResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseReferralArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseReferral.deleteMany(args);
  }
}
