import * as TypeGraphQL from "type-graphql";
import { FindUniqueCasePelakuArgs } from "./args/FindUniqueCasePelakuArgs";
import { CasePelaku } from "../../../models/CasePelaku";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePelaku)
export class FindUniqueCasePelakuResolver {
  @TypeGraphQL.Query(_returns => CasePelaku, {
    nullable: true
  })
  async casePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCasePelakuArgs): Promise<CasePelaku | null> {
    return getPrismaFromContext(ctx).casePelaku.findUnique(args);
  }
}
