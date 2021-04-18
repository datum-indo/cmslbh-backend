import * as TypeGraphQL from "type-graphql";
import { CreateCasePkArgs } from "./args/CreateCasePkArgs";
import { CasePk } from "../../../models/CasePk";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CasePk)
export class CreateCasePkResolver {
  @TypeGraphQL.Mutation(_returns => CasePk, {
    nullable: false
  })
  async createCasePk(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCasePkArgs): Promise<CasePk> {
    return getPrismaFromContext(ctx).casePk.create(args);
  }
}
