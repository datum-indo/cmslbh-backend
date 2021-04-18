import * as TypeGraphQL from "type-graphql";
import { UpsertCaseProgressArgs } from "./args/UpsertCaseProgressArgs";
import { CaseProgress } from "../../../models/CaseProgress";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgress)
export class UpsertCaseProgressResolver {
  @TypeGraphQL.Mutation(_returns => CaseProgress, {
    nullable: false
  })
  async upsertCaseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseProgressArgs): Promise<CaseProgress> {
    return getPrismaFromContext(ctx).caseProgress.upsert(args);
  }
}
