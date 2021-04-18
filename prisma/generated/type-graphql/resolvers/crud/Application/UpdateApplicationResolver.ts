import * as TypeGraphQL from "type-graphql";
import { UpdateApplicationArgs } from "./args/UpdateApplicationArgs";
import { Application } from "../../../models/Application";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Application)
export class UpdateApplicationResolver {
  @TypeGraphQL.Mutation(_returns => Application, {
    nullable: true
  })
  async updateApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateApplicationArgs): Promise<Application | null> {
    return getPrismaFromContext(ctx).application.update(args);
  }
}
