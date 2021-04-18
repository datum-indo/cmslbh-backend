import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseCategoryArgs } from "./args/FindUniqueCaseCategoryArgs";
import { CaseCategory } from "../../../models/CaseCategory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseCategory)
export class FindUniqueCaseCategoryResolver {
  @TypeGraphQL.Query(_returns => CaseCategory, {
    nullable: true
  })
  async caseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseCategoryArgs): Promise<CaseCategory | null> {
    return getPrismaFromContext(ctx).caseCategory.findUnique(args);
  }
}
