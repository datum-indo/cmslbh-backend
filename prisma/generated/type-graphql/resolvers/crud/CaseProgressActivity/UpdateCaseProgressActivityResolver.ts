import * as TypeGraphQL from "type-graphql";
import { UpdateCaseProgressActivityArgs } from "./args/UpdateCaseProgressActivityArgs";
import { CaseProgressActivity } from "../../../models/CaseProgressActivity";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivity)
export class UpdateCaseProgressActivityResolver {
  @TypeGraphQL.Mutation(_returns => CaseProgressActivity, {
    nullable: true
  })
  async updateCaseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseProgressActivityArgs): Promise<CaseProgressActivity | null> {
    return getPrismaFromContext(ctx).caseProgressActivity.update(args);
  }
}
