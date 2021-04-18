import * as TypeGraphQL from "type-graphql";
import { FindFirstCaseModusArgs } from "./args/FindFirstCaseModusArgs";
import { CaseModus } from "../../../models/CaseModus";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseModus)
export class FindFirstCaseModusResolver {
  @TypeGraphQL.Query(_returns => CaseModus, {
    nullable: true
  })
  async findFirstCaseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCaseModusArgs): Promise<CaseModus | null> {
    return getPrismaFromContext(ctx).caseModus.findFirst(args);
  }
}
