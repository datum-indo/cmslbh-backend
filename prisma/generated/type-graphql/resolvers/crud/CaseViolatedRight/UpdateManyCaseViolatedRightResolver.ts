import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseViolatedRightArgs } from "./args/UpdateManyCaseViolatedRightArgs";
import { CaseViolatedRight } from "../../../models/CaseViolatedRight";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolatedRight)
export class UpdateManyCaseViolatedRightResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseViolatedRightArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseViolatedRight.updateMany(args);
  }
}
