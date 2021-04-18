import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseProgressActivityArgs } from "./args/UpdateManyCaseProgressActivityArgs";
import { CaseProgressActivity } from "../../../models/CaseProgressActivity";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivity)
export class UpdateManyCaseProgressActivityResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseProgressActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseProgressActivityArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseProgressActivity.updateMany(args);
  }
}
