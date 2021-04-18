import * as TypeGraphQL from "type-graphql";
import { DeleteCaseProgressActivityLitArgs } from "./args/DeleteCaseProgressActivityLitArgs";
import { CaseProgressActivityLit } from "../../../models/CaseProgressActivityLit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityLit)
export class DeleteCaseProgressActivityLitResolver {
  @TypeGraphQL.Mutation(_returns => CaseProgressActivityLit, {
    nullable: true
  })
  async deleteCaseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseProgressActivityLitArgs): Promise<CaseProgressActivityLit | null> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.delete(args);
  }
}
