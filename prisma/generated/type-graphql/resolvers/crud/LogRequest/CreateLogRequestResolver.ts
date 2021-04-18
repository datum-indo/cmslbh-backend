import * as TypeGraphQL from "type-graphql";
import { CreateLogRequestArgs } from "./args/CreateLogRequestArgs";
import { LogRequest } from "../../../models/LogRequest";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequest)
export class CreateLogRequestResolver {
  @TypeGraphQL.Mutation(_returns => LogRequest, {
    nullable: false
  })
  async createLogRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateLogRequestArgs): Promise<LogRequest> {
    return getPrismaFromContext(ctx).logRequest.create(args);
  }
}
