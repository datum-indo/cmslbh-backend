import * as TypeGraphQL from "type-graphql";
import { UpsertCaseCategoryArgs } from "./args/UpsertCaseCategoryArgs";
import { CaseCategory } from "../../../models/CaseCategory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseCategory)
export class UpsertCaseCategoryResolver {
  @TypeGraphQL.Mutation(_returns => CaseCategory, {
    nullable: false
  })
  async upsertCaseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseCategoryArgs): Promise<CaseCategory> {
    return getPrismaFromContext(ctx).caseCategory.upsert(args);
  }
}
