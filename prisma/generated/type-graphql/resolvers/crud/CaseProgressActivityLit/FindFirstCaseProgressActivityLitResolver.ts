import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseProgressActivityLitArgs } from "./args/FindFirstCaseProgressActivityLitArgs";
import { CaseProgressActivityLit } from "../../../models/CaseProgressActivityLit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityLit)
export class FindFirstCaseProgressActivityLitResolver {
  @TypeGraphQL.Query(_returns => CaseProgressActivityLit, {
    nullable: true
  })
  async findFirstCaseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseProgressActivityLitArgs): Promise<CaseProgressActivityLit | null> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.findFirst(args);
  }
}
