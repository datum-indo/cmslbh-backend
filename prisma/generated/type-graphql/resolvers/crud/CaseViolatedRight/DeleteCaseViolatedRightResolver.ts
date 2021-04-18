import * as TypeGraphQL from "type-graphql";
import { DeleteCaseViolatedRightArgs } from "./args/DeleteCaseViolatedRightArgs";
import { CaseViolatedRight } from "../../../models/CaseViolatedRight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolatedRight)
export class DeleteCaseViolatedRightResolver {
  @TypeGraphQL.Mutation(_returns => CaseViolatedRight, {
    nullable: true
  })
  async deleteCaseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseViolatedRightArgs): Promise<CaseViolatedRight | null> {
    return getPrismaFromContext(ctx).caseViolatedRight.delete(args);
  }
}
