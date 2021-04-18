import * as TypeGraphQL from "type-graphql";
import { FindUniqueCaseModusArgs } from "./args/FindUniqueCaseModusArgs";
import { CaseModus } from "../../../models/CaseModus";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseModus)
export class FindUniqueCaseModusResolver {
  @TypeGraphQL.Query(_returns => CaseModus, {
    nullable: true
  })
  async caseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCaseModusArgs): Promise<CaseModus | null> {
    return getPrismaFromContext(ctx).caseModus.findUnique(args);
  }
}
