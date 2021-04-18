import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseViolatedRightArgs } from "./args/FindUniqueCaseViolatedRightArgs";
import { CaseViolatedRight } from "../../../models/CaseViolatedRight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolatedRight)
export class FindUniqueCaseViolatedRightResolver {
  @TypeGraphQL.Query(_returns => CaseViolatedRight, {
    nullable: true
  })
  async caseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseViolatedRightArgs): Promise<CaseViolatedRight | null> {
    return getPrismaFromContext(ctx).caseViolatedRight.findUnique(args);
  }
}
