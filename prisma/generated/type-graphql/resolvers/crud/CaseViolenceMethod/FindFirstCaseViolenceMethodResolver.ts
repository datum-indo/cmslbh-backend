import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseViolenceMethodArgs } from "./args/FindFirstCaseViolenceMethodArgs";
import { CaseViolenceMethod } from "../../../models/CaseViolenceMethod";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolenceMethod)
export class FindFirstCaseViolenceMethodResolver {
  @TypeGraphQL.Query(_returns => CaseViolenceMethod, {
    nullable: true
  })
  async findFirstCaseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseViolenceMethodArgs): Promise<CaseViolenceMethod | null> {
    return getPrismaFromContext(ctx).caseViolenceMethod.findFirst(args);
  }
}
