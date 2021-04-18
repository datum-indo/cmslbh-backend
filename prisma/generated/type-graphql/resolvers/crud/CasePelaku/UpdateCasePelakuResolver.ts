import * as TypeGraphQL from "type-graphql";
import { UpdateCasePelakuArgs } from "./args/UpdateCasePelakuArgs";
import { CasePelaku } from "../../../models/CasePelaku";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePelaku)
export class UpdateCasePelakuResolver {
  @TypeGraphQL.Mutation(_returns => CasePelaku, {
    nullable: true
  })
  async updateCasePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCasePelakuArgs): Promise<CasePelaku | null> {
    return getPrismaFromContext(ctx).casePelaku.update(args);
  }
}
