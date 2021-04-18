import * as TypeGraphQL from "type-graphql";
import { DeleteLogRequestAppArgs } from "./args/DeleteLogRequestAppArgs";
import { LogRequestApp } from "../../../models/LogRequestApp";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LogRequestApp)
export class DeleteLogRequestAppResolver {
  @TypeGraphQL.Mutation(_returns => LogRequestApp, {
    nullable: true
  })
  async deleteLogRequestApp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteLogRequestAppArgs): Promise<LogRequestApp | null> {
    return getPrismaFromContext(ctx).logRequestApp.delete(args);
  }
}
