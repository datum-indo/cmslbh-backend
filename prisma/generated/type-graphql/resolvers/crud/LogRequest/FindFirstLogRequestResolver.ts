import * as TypeGraphQL from "type-graphql";
import { FindFirstLogRequestArgs } from "./args/FindFirstLogRequestArgs";
import { LogRequest } from "../../../models/LogRequest";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequest)
export class FindFirstLogRequestResolver {
  @TypeGraphQL.Query(_returns => LogRequest, {
    nullable: true
  })
  async findFirstLogRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstLogRequestArgs): Promise<LogRequest | null> {
    return getPrismaFromContext(ctx).logRequest.findFirst(args);
  }
}
