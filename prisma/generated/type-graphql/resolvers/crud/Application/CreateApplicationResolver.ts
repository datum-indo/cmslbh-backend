import * as TypeGraphQL from "type-graphql";
import { CreateApplicationArgs } from "./args/CreateApplicationArgs";
import { Application } from "../../../models/Application";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Application)
export class CreateApplicationResolver {
  @TypeGraphQL.Mutation(_returns => Application, {
    nullable: false
  })
  async createApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateApplicationArgs): Promise<Application> {
    return getPrismaFromContext(ctx).application.create(args);
  }
}
