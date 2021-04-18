import * as TypeGraphQL from "type-graphql";
import { FindManyLogRequestArgs } from "./args/FindManyLogRequestArgs";
import { LogRequest } from "../../../models/LogRequest";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequest)
export class FindManyLogRequestResolver {
  @TypeGraphQL.Query(_returns => [LogRequest], {
    nullable: false
  })
  async logRequests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyLogRequestArgs): Promise<LogRequest[]> {
    return getPrismaFromContext(ctx).logRequest.findMany(args);
  }
}
