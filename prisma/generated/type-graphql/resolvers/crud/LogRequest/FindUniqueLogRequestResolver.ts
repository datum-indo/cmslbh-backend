import * as TypeGraphQL from "type-graphql";
import { FindUniqueLogRequestArgs } from "./args/FindUniqueLogRequestArgs";
import { LogRequest } from "../../../models/LogRequest";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequest)
export class FindUniqueLogRequestResolver {
  @TypeGraphQL.Query(_returns => LogRequest, {
    nullable: true
  })
  async logRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueLogRequestArgs): Promise<LogRequest | null> {
    return getPrismaFromContext(ctx).logRequest.findUnique(args);
  }
}
