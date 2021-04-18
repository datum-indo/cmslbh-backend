import * as TypeGraphQL from "type-graphql";
import { DeleteLogRequestArgs } from "./args/DeleteLogRequestArgs";
import { LogRequest } from "../../../models/LogRequest";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequest)
export class DeleteLogRequestResolver {
  @TypeGraphQL.Mutation(_returns => LogRequest, {
    nullable: true
  })
  async deleteLogRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteLogRequestArgs): Promise<LogRequest | null> {
    return getPrismaFromContext(ctx).logRequest.delete(args);
  }
}
