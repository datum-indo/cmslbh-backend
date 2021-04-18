import * as TypeGraphQL from "type-graphql";
import { UpsertCaseModusArgs } from "./args/UpsertCaseModusArgs";
import { CaseModus } from "../../../models/CaseModus";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseModus)
export class UpsertCaseModusResolver {
  @TypeGraphQL.Mutation(_returns => CaseModus, {
    nullable: false
  })
  async upsertCaseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCaseModusArgs): Promise<CaseModus> {
    return getPrismaFromContext(ctx).caseModus.upsert(args);
  }
}
