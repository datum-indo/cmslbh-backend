import * as TypeGraphQL from "type-graphql";
import { CreateCaseTransferReferralArgs } from "./args/CreateCaseTransferReferralArgs";
import { CaseTransferReferral } from "../../../models/CaseTransferReferral";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseTransferReferral)
export class CreateCaseTransferReferralResolver {
  @TypeGraphQL.Mutation(_returns => CaseTransferReferral, {
    nullable: false
  })
  async createCaseTransferReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseTransferReferralArgs): Promise<CaseTransferReferral> {
    return getPrismaFromContext(ctx).caseTransferReferral.create(args);
  }
}
