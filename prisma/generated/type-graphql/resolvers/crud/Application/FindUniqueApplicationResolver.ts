import * as TypeGraphQL from "type-graphql";
import { FindUniqueApplicationArgs } from "./args/FindUniqueApplicationArgs";
import { Application } from "../../../models/Application";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Application)
export class FindUniqueApplicationResolver {
  @TypeGraphQL.Query(_returns => Application, {
    nullable: true
  })
  async application(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueApplicationArgs): Promise<Application | null> {
    return getPrismaFromContext(ctx).application.findUnique(args);
  }
}
