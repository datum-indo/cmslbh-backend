import * as TypeGraphQL from "type-graphql";
import { CreateCaseProgressActivityNonlitArgs } from "./args/CreateCaseProgressActivityNonlitArgs";
import { CaseProgressActivityNonlit } from "../../../models/CaseProgressActivityNonlit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityNonlit)
export class CreateCaseProgressActivityNonlitResolver {
  @TypeGraphQL.Mutation(_returns => CaseProgressActivityNonlit, {
    nullable: false
  })
  async createCaseProgressActivityNonlit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseProgressActivityNonlitArgs): Promise<CaseProgressActivityNonlit> {
    return getPrismaFromContext(ctx).caseProgressActivityNonlit.create(args);
  }
}
