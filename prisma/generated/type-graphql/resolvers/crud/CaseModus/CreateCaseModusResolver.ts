import * as TypeGraphQL from "type-graphql";
import { CreateCaseModusArgs } from "./args/CreateCaseModusArgs";
import { CaseModus } from "../../../models/CaseModus";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CaseModus)
export class CreateCaseModusResolver {
  @TypeGraphQL.Mutation(_returns => CaseModus, {
    nullable: false
  })
  async createCaseModus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCaseModusArgs): Promise<CaseModus> {
    return getPrismaFromContext(ctx).caseModus.create(args);
  }
}
