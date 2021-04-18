import * as TypeGraphQL from "type-graphql";
import { CreateCaseProgressActivityArgs } from "./args/CreateCaseProgressActivityArgs";
import { CaseProgressActivity } from "../../../models/CaseProgressActivity";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivity)
export class CreateCaseProgressActivityResolver {
  @TypeGraphQL.Mutation(_returns => CaseProgressActivity, {
    nullable: false
  })
  async createCaseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseProgressActivityArgs): Promise<CaseProgressActivity> {
    return getPrismaFromContext(ctx).caseProgressActivity.create(args);
  }
}
