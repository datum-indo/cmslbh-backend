import * as TypeGraphQL from "type-graphql";
import { UpdateCaseViolatedRightArgs } from "./args/UpdateCaseViolatedRightArgs";
import { CaseViolatedRight } from "../../../models/CaseViolatedRight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolatedRight)
export class UpdateCaseViolatedRightResolver {
  @TypeGraphQL.Mutation(_returns => CaseViolatedRight, {
    nullable: true
  })
  async updateCaseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseViolatedRightArgs): Promise<CaseViolatedRight | null> {
    return getPrismaFromContext(ctx).caseViolatedRight.update(args);
  }
}
