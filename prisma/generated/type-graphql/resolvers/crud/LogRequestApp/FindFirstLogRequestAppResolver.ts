import * as TypeGraphQL from "type-graphql";
import { FindFirstLogRequestAppArgs } from "./args/FindFirstLogRequestAppArgs";
import { LogRequestApp } from "../../../models/LogRequestApp";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequestApp)
export class FindFirstLogRequestAppResolver {
  @TypeGraphQL.Query(_returns => LogRequestApp, {
    nullable: true
  })
  async findFirstLogRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstLogRequestAppArgs): Promise<LogRequestApp | null> {
    return getPrismaFromContext(ctx).logRequestApp.findFirst(args);
  }
}
