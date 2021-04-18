import * as TypeGraphQL from "type-graphql";
import { FindManyCasePkArgs } from "./args/FindManyCasePkArgs";
import { CasePk } from "../../../models/CasePk";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePk)
export class FindManyCasePkResolver {
  @TypeGraphQL.Query(_returns => [CasePk], {
    nullable: false
  })
  async casePks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCasePkArgs): Promise<CasePk[]> {
    return getPrismaFromContext(ctx).casePk.findMany(args);
  }
}
