import * as TypeGraphQL from "type-graphql";
import { DeleteCaseClassificationArgs } from "./args/DeleteCaseClassificationArgs";
import { CaseClassification } from "../../../models/CaseClassification";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseClassification)
export class DeleteCaseClassificationResolver {
  @TypeGraphQL.Mutation(_returns => CaseClassification, {
    nullable: true
  })
  async deleteCaseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseClassificationArgs): Promise<CaseClassification | null> {
    return getPrismaFromContext(ctx).caseClassification.delete(args);
  }
}
