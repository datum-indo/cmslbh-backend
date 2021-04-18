import * as TypeGraphQL from "type-graphql";
import { CreateCaseProgressArgs } from "./args/CreateCaseProgressArgs";
import { CaseProgress } from "../../../models/CaseProgress";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgress)
export class CreateCaseProgressResolver {
  @TypeGraphQL.Mutation(_returns => CaseProgress, {
    nullable: false
  })
  async createCaseProgress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseProgressArgs): Promise<CaseProgress> {
    return getPrismaFromContext(ctx).caseProgress.create(args);
  }
}
