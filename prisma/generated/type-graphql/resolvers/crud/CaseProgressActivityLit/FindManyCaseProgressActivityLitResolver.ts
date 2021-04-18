import * as TypeGraphQL from "type-graphql";
import { FindManyCaseProgressActivityLitArgs } from "./args/FindManyCaseProgressActivityLitArgs";
import { CaseProgressActivityLit } from "../../../models/CaseProgressActivityLit";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseProgressActivityLit)
export class FindManyCaseProgressActivityLitResolver {
  @TypeGraphQL.Query(_returns => [CaseProgressActivityLit], {
    nullable: false
  })
  async caseProgressActivityLits(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseProgressActivityLitArgs): Promise<CaseProgressActivityLit[]> {
    return getPrismaFromContext(ctx).caseProgressActivityLit.findMany(args);
  }
}
