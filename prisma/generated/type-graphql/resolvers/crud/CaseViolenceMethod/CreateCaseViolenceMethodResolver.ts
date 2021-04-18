import * as TypeGraphQL from "type-graphql";
import { CreateCaseViolenceMethodArgs } from "./args/CreateCaseViolenceMethodArgs";
import { CaseViolenceMethod } from "../../../models/CaseViolenceMethod";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolenceMethod)
export class CreateCaseViolenceMethodResolver {
  @TypeGraphQL.Mutation(_returns => CaseViolenceMethod, {
    nullable: false
  })
  async createCaseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseViolenceMethodArgs): Promise<CaseViolenceMethod> {
    return getPrismaFromContext(ctx).caseViolenceMethod.create(args);
  }
}
