import * as TypeGraphQL from "type-graphql";
import { UpdateManyCaseCategoryArgs } from "./args/UpdateManyCaseCategoryArgs";
import { CaseCategory } from "../../../models/CaseCategory";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseCategory)
export class UpdateManyCaseCategoryResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCaseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCaseCategoryArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseCategory.updateMany(args);
  }
}
