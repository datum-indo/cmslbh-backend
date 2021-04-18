import * as TypeGraphQL from "type-graphql";
import { DeleteCaseProgressActivityArgs } from "./args/DeleteCaseProgressActivityArgs";
import { CaseProgressActivity } from "../../../models/CaseProgressActivity";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivity)
export class DeleteCaseProgressActivityResolver {
  @TypeGraphQL.Mutation(_returns => CaseProgressActivity, {
    nullable: true
  })
  async deleteCaseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseProgressActivityArgs): Promise<CaseProgressActivity | null> {
    return getPrismaFromContext(ctx).caseProgressActivity.delete(args);
  }
}
