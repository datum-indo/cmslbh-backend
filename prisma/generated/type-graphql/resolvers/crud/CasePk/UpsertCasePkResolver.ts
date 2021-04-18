import * as TypeGraphQL from "type-graphql";
import { UpsertCasePkArgs } from "./args/UpsertCasePkArgs";
import { CasePk } from "../../../models/CasePk";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePk)
export class UpsertCasePkResolver {
  @TypeGraphQL.Mutation(_returns => CasePk, {
    nullable: false
  })
  async upsertCasePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCasePkArgs): Promise<CasePk> {
    return getPrismaFromContext(ctx).casePk.upsert(args);
  }
}
