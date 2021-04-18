import * as TypeGraphQL from "type-graphql";
import { UpdateLogRequestAppArgs } from "./args/UpdateLogRequestAppArgs";
import { LogRequestApp } from "../../../models/LogRequestApp";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequestApp)
export class UpdateLogRequestAppResolver {
  @TypeGraphQL.Mutation(_returns => LogRequestApp, {
    nullable: true
  })
  async updateLogRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateLogRequestAppArgs): Promise<LogRequestApp | null> {
    return getPrismaFromContext(ctx).logRequestApp.update(args);
  }
}
