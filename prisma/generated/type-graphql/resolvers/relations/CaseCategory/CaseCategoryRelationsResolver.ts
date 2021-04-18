import * as TypeGraphQL from "type-graphql";
import { CaseCategory } from "../../../models/CaseCategory";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseCategory)
export class CaseCategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Renamedcase, {
    nullable: true
  })
  async caseId(@TypeGraphQL.Root() caseCategory: CaseCategory, @TypeGraphQL.Ctx() ctx: any): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).caseCategory.findUnique({
      where: {
        id: caseCategory.id,
      },
    }).caseId({});
  }
}
