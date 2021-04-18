import * as TypeGraphQL from "type-graphql";
import { FindManyCaseClassificationArgs } from "./args/FindManyCaseClassificationArgs";
import { CaseClassification } from "../../../models/CaseClassification";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseClassification)
export class FindManyCaseClassificationResolver {
  @TypeGraphQL.Query(_returns => [CaseClassification], {
    nullable: false
  })
  async caseClassifications(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseClassificationArgs): Promise<CaseClassification[]> {
    return getPrismaFromContext(ctx).caseClassification.findMany(args);
  }
}
