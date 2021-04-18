import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseViolatedRightArgs } from "./args/DeleteManyCaseViolatedRightArgs";
import { CaseViolatedRight } from "../../../models/CaseViolatedRight";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolatedRight)
export class DeleteManyCaseViolatedRightResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseViolatedRightArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseViolatedRight.deleteMany(args);
  }
}
