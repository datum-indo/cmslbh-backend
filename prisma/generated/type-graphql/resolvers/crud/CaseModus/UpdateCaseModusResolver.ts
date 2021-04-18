import * as TypeGraphQL from "type-graphql";
import { UpdateCaseModusArgs } from "./args/UpdateCaseModusArgs";
import { CaseModus } from "../../../models/CaseModus";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseModus)
export class UpdateCaseModusResolver {
  @TypeGraphQL.Mutation(_returns => CaseModus, {
    nullable: true
  })
  async updateCaseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCaseModusArgs): Promise<CaseModus | null> {
    return getPrismaFromContext(ctx).caseModus.update(args);
  }
}
