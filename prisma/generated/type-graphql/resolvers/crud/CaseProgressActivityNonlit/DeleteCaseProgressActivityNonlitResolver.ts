import * as TypeGraphQL from "type-graphql";
import { DeleteCaseProgressActivityNonlitArgs } from "./args/DeleteCaseProgressActivityNonlitArgs";
import { CaseProgressActivityNonlit } from "../../../models/CaseProgressActivityNonlit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityNonlit)
export class DeleteCaseProgressActivityNonlitResolver {
  @TypeGraphQL.Mutation(_returns => CaseProgressActivityNonlit, {
    nullable: true
  })
  async deleteCaseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseProgressActivityNonlitArgs): Promise<CaseProgressActivityNonlit | null> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.delete(args);
  }
}
