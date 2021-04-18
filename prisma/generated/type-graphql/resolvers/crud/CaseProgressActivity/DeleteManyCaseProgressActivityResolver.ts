import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseProgressActivityArgs } from "./args/DeleteManyCaseProgressActivityArgs";
import { CaseProgressActivity } from "../../../models/CaseProgressActivity";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivity)
export class DeleteManyCaseProgressActivityResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseProgressActivityArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseProgressActivity.deleteMany(args);
  }
}
