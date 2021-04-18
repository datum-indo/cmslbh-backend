import * as TypeGraphQL from "type-graphql";
import { UpsertCaseProgressActivityArgs } from "./args/UpsertCaseProgressActivityArgs";
import { CaseProgressActivity } from "../../../models/CaseProgressActivity";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivity)
export class UpsertCaseProgressActivityResolver {
  @TypeGraphQL.Mutation(_returns => CaseProgressActivity, {
    nullable: false
  })
  async upsertCaseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseProgressActivityArgs): Promise<CaseProgressActivity> {
    return getPrismaFromContext(ctx).caseProgressActivity.upsert(args);
  }
}
