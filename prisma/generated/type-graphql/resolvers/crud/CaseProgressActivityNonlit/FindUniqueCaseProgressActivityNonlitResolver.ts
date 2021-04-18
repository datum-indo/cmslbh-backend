import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseProgressActivityNonlitArgs } from "./args/FindUniqueCaseProgressActivityNonlitArgs";
import { CaseProgressActivityNonlit } from "../../../models/CaseProgressActivityNonlit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityNonlit)
export class FindUniqueCaseProgressActivityNonlitResolver {
  @TypeGraphQL.Query(_returns => CaseProgressActivityNonlit, {
    nullable: true
  })
  async caseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseProgressActivityNonlitArgs): Promise<CaseProgressActivityNonlit | null> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.findUnique(args);
  }
}
