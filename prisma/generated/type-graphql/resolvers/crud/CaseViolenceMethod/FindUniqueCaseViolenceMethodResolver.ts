import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseViolenceMethodArgs } from "./args/FindUniqueCaseViolenceMethodArgs";
import { CaseViolenceMethod } from "../../../models/CaseViolenceMethod";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolenceMethod)
export class FindUniqueCaseViolenceMethodResolver {
  @TypeGraphQL.Query(_returns => CaseViolenceMethod, {
    nullable: true
  })
  async caseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseViolenceMethodArgs): Promise<CaseViolenceMethod | null> {
    return getPrismaFromContext(ctx).caseViolenceMethod.findUnique(args);
  }
}
