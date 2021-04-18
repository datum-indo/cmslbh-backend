import * as TypeGraphQL from "type-graphql";
import { FindManyCasePelakuArgs } from "./args/FindManyCasePelakuArgs";
import { CasePelaku } from "../../../models/CasePelaku";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePelaku)
export class FindManyCasePelakuResolver {
  @TypeGraphQL.Query(_returns => [CasePelaku], {
    nullable: false
  })
  async casePelakus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCasePelakuArgs): Promise<CasePelaku[]> {
    return getPrismaFromContext(ctx).casePelaku.findMany(args);
  }
}
