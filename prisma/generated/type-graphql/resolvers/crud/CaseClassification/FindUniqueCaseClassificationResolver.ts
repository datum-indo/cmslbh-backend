import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseClassificationArgs } from "./args/FindUniqueCaseClassificationArgs";
import { CaseClassification } from "../../../models/CaseClassification";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseClassification)
export class FindUniqueCaseClassificationResolver {
  @TypeGraphQL.Query(_returns => CaseClassification, {
    nullable: true
  })
  async caseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseClassificationArgs): Promise<CaseClassification | null> {
    return getPrismaFromContext(ctx).caseClassification.findUnique(args);
  }
}
