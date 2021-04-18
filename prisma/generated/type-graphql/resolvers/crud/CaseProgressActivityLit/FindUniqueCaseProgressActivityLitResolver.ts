import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseProgressActivityLitArgs } from "./args/FindUniqueCaseProgressActivityLitArgs";
import { CaseProgressActivityLit } from "../../../models/CaseProgressActivityLit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityLit)
export class FindUniqueCaseProgressActivityLitResolver {
  @TypeGraphQL.Query(_returns => CaseProgressActivityLit, {
    nullable: true
  })
  async caseProgressActivityLit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseProgressActivityLitArgs): Promise<CaseProgressActivityLit | null> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.findUnique(args);
  }
}
