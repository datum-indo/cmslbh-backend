import * as TypeGraphQL from "type-graphql";
import { UpdateCaseProgressActivityLitArgs } from "./args/UpdateCaseProgressActivityLitArgs";
import { CaseProgressActivityLit } from "../../../models/CaseProgressActivityLit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityLit)
export class UpdateCaseProgressActivityLitResolver {
  @TypeGraphQL.Mutation(_returns => CaseProgressActivityLit, {
    nullable: true
  })
  async updateCaseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseProgressActivityLitArgs): Promise<CaseProgressActivityLit | null> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.update(args);
  }
}
