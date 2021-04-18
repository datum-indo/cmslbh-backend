import * as TypeGraphQL from "type-graphql";
import { FindFirstCasePelakuArgs } from "./args/FindFirstCasePelakuArgs";
import { CasePelaku } from "../../../models/CasePelaku";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePelaku)
export class FindFirstCasePelakuResolver {
  @TypeGraphQL.Query(_returns => CasePelaku, {
    nullable: true
  })
  async findFirstCasePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCasePelakuArgs): Promise<CasePelaku | null> {
    return getPrismaFromContext(ctx).casePelaku.findFirst(args);
  }
}
