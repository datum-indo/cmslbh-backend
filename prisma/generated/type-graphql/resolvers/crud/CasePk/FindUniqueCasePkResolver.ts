import * as TypeGraphQL from "type-graphql";
import { FindUniqueCasePkArgs } from "./args/FindUniqueCasePkArgs";
import { CasePk } from "../../../models/CasePk";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePk)
export class FindUniqueCasePkResolver {
  @TypeGraphQL.Query(_returns => CasePk, {
    nullable: true
  })
  async casePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCasePkArgs): Promise<CasePk | null> {
    return getPrismaFromContext(ctx).casePk.findUnique(args);
  }
}
