import * as TypeGraphQL from "type-graphql";
import { UpdateCasePkArgs } from "./args/UpdateCasePkArgs";
import { CasePk } from "../../../models/CasePk";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePk)
export class UpdateCasePkResolver {
  @TypeGraphQL.Mutation(_returns => CasePk, {
    nullable: true
  })
  async updateCasePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCasePkArgs): Promise<CasePk | null> {
    return getPrismaFromContext(ctx).casePk.update(args);
  }
}
