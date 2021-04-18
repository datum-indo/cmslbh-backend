import * as TypeGraphQL from "type-graphql";
import { CreateLogRequestAppArgs } from "./args/CreateLogRequestAppArgs";
import { LogRequestApp } from "../../../models/LogRequestApp";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequestApp)
export class CreateLogRequestAppResolver {
  @TypeGraphQL.Mutation(_returns => LogRequestApp, {
    nullable: false
  })
  async createLogRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateLogRequestAppArgs): Promise<LogRequestApp> {
    return getPrismaFromContext(ctx).logRequestApp.create(args);
  }
}
