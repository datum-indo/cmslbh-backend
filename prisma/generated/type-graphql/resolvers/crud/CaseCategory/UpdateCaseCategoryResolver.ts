import * as TypeGraphQL from "type-graphql";
import { UpdateCaseCategoryArgs } from "./args/UpdateCaseCategoryArgs";
import { CaseCategory } from "../../../models/CaseCategory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseCategory)
export class UpdateCaseCategoryResolver {
  @TypeGraphQL.Mutation(_returns => CaseCategory, {
    nullable: true
  })
  async updateCaseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseCategoryArgs): Promise<CaseCategory | null> {
    return getPrismaFromContext(ctx).caseCategory.update(args);
  }
}
