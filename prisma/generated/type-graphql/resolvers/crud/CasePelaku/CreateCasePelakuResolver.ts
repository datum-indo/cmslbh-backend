import * as TypeGraphQL from "type-graphql";
import { CreateCasePelakuArgs } from "./args/CreateCasePelakuArgs";
import { CasePelaku } from "../../../models/CasePelaku";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePelaku)
export class CreateCasePelakuResolver {
  @TypeGraphQL.Mutation(_returns => CasePelaku, {
    nullable: false
  })
  async createCasePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCasePelakuArgs): Promise<CasePelaku> {
    return getPrismaFromContext(ctx).casePelaku.create(args);
  }
}
