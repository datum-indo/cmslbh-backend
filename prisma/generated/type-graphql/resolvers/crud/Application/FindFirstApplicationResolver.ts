import * as TypeGraphQL from "type-graphql";
import { FindFirstApplicationArgs } from "./args/FindFirstApplicationArgs";
import { Application } from "../../../models/Application";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Application)
export class FindFirstApplicationResolver {
  @TypeGraphQL.Query(_returns => Application, {
    nullable: true
  })
  async findFirstApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstApplicationArgs): Promise<Application | null> {
    return getPrismaFromContext(ctx).application.findFirst(args);
  }
}
