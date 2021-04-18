import * as TypeGraphQL from "type-graphql";
import { CreateCaseCategoryArgs } from "./args/CreateCaseCategoryArgs";
import { CaseCategory } from "../../../models/CaseCategory";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseCategory)
export class CreateCaseCategoryResolver {
  @TypeGraphQL.Mutation(_returns => CaseCategory, {
    nullable: false
  })
  async createCaseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseCategoryArgs): Promise<CaseCategory> {
    return getPrismaFromContext(ctx).caseCategory.create(args);
  }
}
