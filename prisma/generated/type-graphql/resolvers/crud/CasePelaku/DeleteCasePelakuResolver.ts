import * as TypeGraphQL from "type-graphql";
import { DeleteCasePelakuArgs } from "./args/DeleteCasePelakuArgs";
import { CasePelaku } from "../../../models/CasePelaku";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePelaku)
export class DeleteCasePelakuResolver {
  @TypeGraphQL.Mutation(_returns => CasePelaku, {
    nullable: true
  })
  async deleteCasePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCasePelakuArgs): Promise<CasePelaku | null> {
    return getPrismaFromContext(ctx).casePelaku.delete(args);
  }
}
