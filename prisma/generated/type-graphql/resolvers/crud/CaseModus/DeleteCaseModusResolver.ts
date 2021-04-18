import * as TypeGraphQL from "type-graphql";
import { DeleteCaseModusArgs } from "./args/DeleteCaseModusArgs";
import { CaseModus } from "../../../models/CaseModus";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseModus)
export class DeleteCaseModusResolver {
  @TypeGraphQL.Mutation(_returns => CaseModus, {
    nullable: true
  })
  async deleteCaseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCaseModusArgs): Promise<CaseModus | null> {
    return getPrismaFromContext(ctx).caseModus.delete(args);
  }
}
