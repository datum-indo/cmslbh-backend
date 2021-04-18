import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseProgressActivityNonlitArgs } from "./args/FindFirstCaseProgressActivityNonlitArgs";
import { CaseProgressActivityNonlit } from "../../../models/CaseProgressActivityNonlit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityNonlit)
export class FindFirstCaseProgressActivityNonlitResolver {
  @TypeGraphQL.Query(_returns => CaseProgressActivityNonlit, {
    nullable: true
  })
  async findFirstCaseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseProgressActivityNonlitArgs): Promise<CaseProgressActivityNonlit | null> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.findFirst(args);
  }
}
