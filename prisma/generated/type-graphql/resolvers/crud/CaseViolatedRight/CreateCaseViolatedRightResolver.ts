import * as TypeGraphQL from "type-graphql";
import { CreateCaseViolatedRightArgs } from "./args/CreateCaseViolatedRightArgs";
import { CaseViolatedRight } from "../../../models/CaseViolatedRight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseViolatedRight)
export class CreateCaseViolatedRightResolver {
  @TypeGraphQL.Mutation(_returns => CaseViolatedRight, {
    nullable: false
  })
  async createCaseViolatedRight(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseViolatedRightArgs): Promise<CaseViolatedRight> {
    return getPrismaFromContext(ctx).caseViolatedRight.create(args);
  }
}
