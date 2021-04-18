import * as TypeGraphQL from "type-graphql";
import { UpsertCasePelakuArgs } from "./args/UpsertCasePelakuArgs";
import { CasePelaku } from "../../../models/CasePelaku";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePelaku)
export class UpsertCasePelakuResolver {
  @TypeGraphQL.Mutation(_returns => CasePelaku, {
    nullable: false
  })
  async upsertCasePelaku(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCasePelakuArgs): Promise<CasePelaku> {
    return getPrismaFromContext(ctx).casePelaku.upsert(args);
  }
}
