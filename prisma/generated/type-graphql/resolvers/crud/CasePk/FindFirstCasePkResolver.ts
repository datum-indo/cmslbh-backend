import * as TypeGraphQL from "type-graphql";
import { FindFirstCasePkArgs } from "./args/FindFirstCasePkArgs";
import { CasePk } from "../../../models/CasePk";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePk)
export class FindFirstCasePkResolver {
  @TypeGraphQL.Query(_returns => CasePk, {
    nullable: true
  })
  async findFirstCasePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCasePkArgs): Promise<CasePk | null> {
    return getPrismaFromContext(ctx).casePk.findFirst(args);
  }
}
