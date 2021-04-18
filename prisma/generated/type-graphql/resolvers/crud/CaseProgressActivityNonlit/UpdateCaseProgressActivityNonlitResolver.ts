import * as TypeGraphQL from "type-graphql";
import { UpdateCaseProgressActivityNonlitArgs } from "./args/UpdateCaseProgressActivityNonlitArgs";
import { CaseProgressActivityNonlit } from "../../../models/CaseProgressActivityNonlit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityNonlit)
export class UpdateCaseProgressActivityNonlitResolver {
  @TypeGraphQL.Mutation(_returns => CaseProgressActivityNonlit, {
    nullable: true
  })
  async updateCaseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseProgressActivityNonlitArgs): Promise<CaseProgressActivityNonlit | null> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.update(args);
  }
}
