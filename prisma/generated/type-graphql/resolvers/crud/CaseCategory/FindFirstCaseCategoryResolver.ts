import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseCategoryArgs } from "./args/FindFirstCaseCategoryArgs";
import { CaseCategory } from "../../../models/CaseCategory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseCategory)
export class FindFirstCaseCategoryResolver {
  @TypeGraphQL.Query(_returns => CaseCategory, {
    nullable: true
  })
  async findFirstCaseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseCategoryArgs): Promise<CaseCategory | null> {
    return getPrismaFromContext(ctx).caseCategory.findFirst(args);
  }
}
