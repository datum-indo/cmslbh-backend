import * as TypeGraphQL from "type-graphql";
import { FindManyCaseViolenceMethodArgs } from "./args/FindManyCaseViolenceMethodArgs";
import { CaseViolenceMethod } from "../../../models/CaseViolenceMethod";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolenceMethod)
export class FindManyCaseViolenceMethodResolver {
  @TypeGraphQL.Query(_returns => [CaseViolenceMethod], {
    nullable: false
  })
  async caseViolenceMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseViolenceMethodArgs): Promise<CaseViolenceMethod[]> {
    return getPrismaFromContext(ctx).caseViolenceMethod.findMany(args);
  }
}
