import * as TypeGraphQL from "type-graphql";
import { DeleteCaseViolenceMethodArgs } from "./args/DeleteCaseViolenceMethodArgs";
import { CaseViolenceMethod } from "../../../models/CaseViolenceMethod";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolenceMethod)
export class DeleteCaseViolenceMethodResolver {
  @TypeGraphQL.Mutation(_returns => CaseViolenceMethod, {
    nullable: true
  })
  async deleteCaseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseViolenceMethodArgs): Promise<CaseViolenceMethod | null> {
    return getPrismaFromContext(ctx).caseViolenceMethod.delete(args);
  }
}
