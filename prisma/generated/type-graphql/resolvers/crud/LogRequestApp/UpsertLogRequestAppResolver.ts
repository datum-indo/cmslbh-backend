import * as TypeGraphQL from "type-graphql";
import { UpsertLogRequestAppArgs } from "./args/UpsertLogRequestAppArgs";
import { LogRequestApp } from "../../../models/LogRequestApp";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequestApp)
export class UpsertLogRequestAppResolver {
  @TypeGraphQL.Mutation(_returns => LogRequestApp, {
    nullable: false
  })
  async upsertLogRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertLogRequestAppArgs): Promise<LogRequestApp> {
    return getPrismaFromContext(ctx).logRequestApp.upsert(args);
  }
}
