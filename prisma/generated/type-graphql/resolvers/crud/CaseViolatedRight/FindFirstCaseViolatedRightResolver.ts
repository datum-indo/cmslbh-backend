import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseViolatedRightArgs } from "./args/FindFirstCaseViolatedRightArgs";
import { CaseViolatedRight } from "../../../models/CaseViolatedRight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolatedRight)
export class FindFirstCaseViolatedRightResolver {
  @TypeGraphQL.Query(_returns => CaseViolatedRight, {
    nullable: true
  })
  async findFirstCaseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseViolatedRightArgs): Promise<CaseViolatedRight | null> {
    return getPrismaFromContext(ctx).caseViolatedRight.findFirst(args);
  }
}
