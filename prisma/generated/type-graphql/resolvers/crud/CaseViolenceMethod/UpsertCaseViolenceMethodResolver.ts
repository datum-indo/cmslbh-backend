import * as TypeGraphQL from "type-graphql";
import { UpsertCaseViolenceMethodArgs } from "./args/UpsertCaseViolenceMethodArgs";
import { CaseViolenceMethod } from "../../../models/CaseViolenceMethod";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolenceMethod)
export class UpsertCaseViolenceMethodResolver {
  @TypeGraphQL.Mutation(_returns => CaseViolenceMethod, {
    nullable: false
  })
  async upsertCaseViolenceMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseViolenceMethodArgs): Promise<CaseViolenceMethod> {
    return getPrismaFromContext(ctx).caseViolenceMethod.upsert(args);
  }
}
