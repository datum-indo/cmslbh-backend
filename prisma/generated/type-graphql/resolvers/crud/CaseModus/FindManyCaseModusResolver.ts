import * as TypeGraphQL from "type-graphql";
import { FindManyCaseModusArgs } from "./args/FindManyCaseModusArgs";
import { CaseModus } from "../../../models/CaseModus";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseModus)
export class FindManyCaseModusResolver {
  @TypeGraphQL.Query(_returns => [CaseModus], {
    nullable: false
  })
  async caseModuses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCaseModusArgs): Promise<CaseModus[]> {
    return getPrismaFromContext(ctx).caseModus.findMany(args);
  }
}
