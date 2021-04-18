import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseClassificationArgs } from "./args/FindFirstCaseClassificationArgs";
import { CaseClassification } from "../../../models/CaseClassification";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseClassification)
export class FindFirstCaseClassificationResolver {
  @TypeGraphQL.Query(_returns => CaseClassification, {
    nullable: true
  })
  async findFirstCaseClassification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseClassificationArgs): Promise<CaseClassification | null> {
    return getPrismaFromContext(ctx).caseClassification.findFirst(args);
  }
}
