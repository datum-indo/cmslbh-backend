import * as TypeGraphQL from "type-graphql";
import { FindManyCaseCategoryArgs } from "./args/FindManyCaseCategoryArgs";
import { CaseCategory } from "../../../models/CaseCategory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseCategory)
export class FindManyCaseCategoryResolver {
  @TypeGraphQL.Query(_returns => [CaseCategory], {
    nullable: false
  })
  async caseCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseCategoryArgs): Promise<CaseCategory[]> {
    return getPrismaFromContext(ctx).caseCategory.findMany(args);
  }
}
