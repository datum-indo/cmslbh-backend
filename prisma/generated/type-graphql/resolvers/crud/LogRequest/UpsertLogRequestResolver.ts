import * as TypeGraphQL from "type-graphql";
import { UpsertLogRequestArgs } from "./args/UpsertLogRequestArgs";
import { LogRequest } from "../../../models/LogRequest";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequest)
export class UpsertLogRequestResolver {
  @TypeGraphQL.Mutation(_returns => LogRequest, {
    nullable: false
  })
  async upsertLogRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertLogRequestArgs): Promise<LogRequest> {
    return getPrismaFromContext(ctx).logRequest.upsert(args);
  }
}
