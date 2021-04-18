import * as TypeGraphQL from "type-graphql";
import { CreateCaseReferralArgs } from "./args/CreateCaseReferralArgs";
import { CaseReferral } from "../../../models/CaseReferral";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseReferral)
export class CreateCaseReferralResolver {
  @TypeGraphQL.Mutation(_returns => CaseReferral, {
    nullable: false
  })
  async createCaseReferral(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseReferralArgs): Promise<CaseReferral> {
    return getPrismaFromContext(ctx).caseReferral.create(args);
  }
}
