import * as TypeGraphQL from "type-graphql";
import { UpsertApplicationArgs } from "./args/UpsertApplicationArgs";
import { Application } from "../../../models/Application";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Application)
export class UpsertApplicationResolver {
  @TypeGraphQL.Mutation(_returns => Application, {
    nullable: false
  })
  async upsertApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertApplicationArgs): Promise<Application> {
    return getPrismaFromContext(ctx).application.upsert(args);
  }
}
