import * as TypeGraphQL from "type-graphql";
import { UpsertCaseViolatedRightArgs } from "./args/UpsertCaseViolatedRightArgs";
import { CaseViolatedRight } from "../../../models/CaseViolatedRight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolatedRight)
export class UpsertCaseViolatedRightResolver {
  @TypeGraphQL.Mutation(_returns => CaseViolatedRight, {
    nullable: false
  })
  async upsertCaseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseViolatedRightArgs): Promise<CaseViolatedRight> {
    return getPrismaFromContext(ctx).caseViolatedRight.upsert(args);
  }
}
