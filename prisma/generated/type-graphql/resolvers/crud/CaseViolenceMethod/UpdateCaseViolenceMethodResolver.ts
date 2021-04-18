import * as TypeGraphQL from "type-graphql";
import { UpdateCaseViolenceMethodArgs } from "./args/UpdateCaseViolenceMethodArgs";
import { CaseViolenceMethod } from "../../../models/CaseViolenceMethod";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolenceMethod)
export class UpdateCaseViolenceMethodResolver {
  @TypeGraphQL.Mutation(_returns => CaseViolenceMethod, {
    nullable: true
  })
  async updateCaseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseViolenceMethodArgs): Promise<CaseViolenceMethod | null> {
    return getPrismaFromContext(ctx).caseViolenceMethod.update(args);
  }
}
