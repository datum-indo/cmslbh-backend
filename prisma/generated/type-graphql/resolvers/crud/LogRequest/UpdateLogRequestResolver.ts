import * as TypeGraphQL from "type-graphql";
import { UpdateLogRequestArgs } from "./args/UpdateLogRequestArgs";
import { LogRequest } from "../../../models/LogRequest";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequest)
export class UpdateLogRequestResolver {
  @TypeGraphQL.Mutation(_returns => LogRequest, {
    nullable: true
  })
  async updateLogRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateLogRequestArgs): Promise<LogRequest | null> {
    return getPrismaFromContext(ctx).logRequest.update(args);
  }
}
