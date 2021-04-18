import * as TypeGraphQL from "type-graphql";
import { FindManyApplicationArgs } from "./args/FindManyApplicationArgs";
import { Application } from "../../../models/Application";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Application)
export class FindManyApplicationResolver {
  @TypeGraphQL.Query(_returns => [Application], {
    nullable: false
  })
  async applications(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyApplicationArgs): Promise<Application[]> {
    return getPrismaFromContext(ctx).application.findMany(args);
  }
}
