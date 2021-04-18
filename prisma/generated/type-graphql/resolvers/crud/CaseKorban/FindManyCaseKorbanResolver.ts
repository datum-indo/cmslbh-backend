import * as TypeGraphQL from "type-graphql";
import { FindManyCaseKorbanArgs } from "./args/FindManyCaseKorbanArgs";
import { CaseKorban } from "../../../models/CaseKorban";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseKorban)
export class FindManyCaseKorbanResolver {
  @TypeGraphQL.Query(_returns => [CaseKorban], {
    nullable: false
  })
  async caseKorbans(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseKorbanArgs): Promise<CaseKorban[]> {
    return getPrismaFromContext(ctx).caseKorban.findMany(args);
  }
}
