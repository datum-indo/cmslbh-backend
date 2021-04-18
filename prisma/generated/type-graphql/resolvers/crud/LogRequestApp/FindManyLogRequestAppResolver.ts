import * as TypeGraphQL from "type-graphql";
import { FindManyLogRequestAppArgs } from "./args/FindManyLogRequestAppArgs";
import { LogRequestApp } from "../../../models/LogRequestApp";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequestApp)
export class FindManyLogRequestAppResolver {
  @TypeGraphQL.Query(_returns => [LogRequestApp], {
    nullable: false
  })
  async logRequestApps(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyLogRequestAppArgs): Promise<LogRequestApp[]> {
    return getPrismaFromContext(ctx).logRequestApp.findMany(args);
  }
}
