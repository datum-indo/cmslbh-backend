import * as TypeGraphQL from "type-graphql";
import { DeleteCaseCategoryArgs } from "./args/DeleteCaseCategoryArgs";
import { CaseCategory } from "../../../models/CaseCategory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseCategory)
export class DeleteCaseCategoryResolver {
  @TypeGraphQL.Mutation(_returns => CaseCategory, {
    nullable: true
  })
  async deleteCaseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseCategoryArgs): Promise<CaseCategory | null> {
    return getPrismaFromContext(ctx).caseCategory.delete(args);
  }
}
