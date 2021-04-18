import * as TypeGraphQL from "type-graphql";
import { FindUniqueLogRequestAppArgs } from "./args/FindUniqueLogRequestAppArgs";
import { LogRequestApp } from "../../../models/LogRequestApp";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequestApp)
export class FindUniqueLogRequestAppResolver {
  @TypeGraphQL.Query(_returns => LogRequestApp, {
    nullable: true
  })
  async logRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueLogRequestAppArgs): Promise<LogRequestApp | null> {
    return getPrismaFromContext(ctx).logRequestApp.findUnique(args);
  }
}
