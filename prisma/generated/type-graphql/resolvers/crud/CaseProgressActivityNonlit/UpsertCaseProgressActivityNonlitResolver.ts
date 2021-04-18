import * as TypeGraphQL from "type-graphql";
import { UpsertCaseProgressActivityNonlitArgs } from "./args/UpsertCaseProgressActivityNonlitArgs";
import { CaseProgressActivityNonlit } from "../../../models/CaseProgressActivityNonlit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityNonlit)
export class UpsertCaseProgressActivityNonlitResolver {
  @TypeGraphQL.Mutation(_returns => CaseProgressActivityNonlit, {
    nullable: false
  })
  async upsertCaseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseProgressActivityNonlitArgs): Promise<CaseProgressActivityNonlit> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.upsert(args);
  }
}
