import * as TypeGraphQL from "type-graphql";
import { FindManyCaseProgressActivityNonlitArgs } from "./args/FindManyCaseProgressActivityNonlitArgs";
import { CaseProgressActivityNonlit } from "../../../models/CaseProgressActivityNonlit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityNonlit)
export class FindManyCaseProgressActivityNonlitResolver {
  @TypeGraphQL.Query(_returns => [CaseProgressActivityNonlit], {
    nullable: false
  })
  async caseProgressActivityNonlits(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseProgressActivityNonlitArgs): Promise<CaseProgressActivityNonlit[]> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.findMany(args);
  }
}
