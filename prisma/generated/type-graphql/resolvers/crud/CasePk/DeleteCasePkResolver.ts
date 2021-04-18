import * as TypeGraphQL from "type-graphql";
import { DeleteCasePkArgs } from "./args/DeleteCasePkArgs";
import { CasePk } from "../../../models/CasePk";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePk)
export class DeleteCasePkResolver {
  @TypeGraphQL.Mutation(_returns => CasePk, {
    nullable: true
  })
  async deleteCasePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCasePkArgs): Promise<CasePk | null> {
    return getPrismaFromContext(ctx).casePk.delete(args);
  }
}
