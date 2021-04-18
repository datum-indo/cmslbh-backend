import * as TypeGraphQL from "type-graphql";
import { FindManyCaseViolatedRightArgs } from "./args/FindManyCaseViolatedRightArgs";
import { CaseViolatedRight } from "../../../models/CaseViolatedRight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolatedRight)
export class FindManyCaseViolatedRightResolver {
  @TypeGraphQL.Query(_returns => [CaseViolatedRight], {
    nullable: false
  })
  async caseViolatedRights(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseViolatedRightArgs): Promise<CaseViolatedRight[]> {
    return getPrismaFromContext(ctx).caseViolatedRight.findMany(args);
  }
}
