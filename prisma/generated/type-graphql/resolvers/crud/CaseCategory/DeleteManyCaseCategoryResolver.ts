import * as TypeGraphQL from "type-graphql";
import { DeleteManyCaseCategoryArgs } from "./args/DeleteManyCaseCategoryArgs";
import { CaseCategory } from "../../../models/CaseCategory";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseCategory)
export class DeleteManyCaseCategoryResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCaseCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCaseCategoryArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).caseCategory.deleteMany(args);
  }
}
