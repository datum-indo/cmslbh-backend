import * as TypeGraphQL from "type-graphql";
import { DeleteApplicationArgs } from "./args/DeleteApplicationArgs";
import { Application } from "../../../models/Application";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Application)
export class DeleteApplicationResolver {
  @TypeGraphQL.Mutation(_returns => Application, {
    nullable: true
  })
  async deleteApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteApplicationArgs): Promise<Application | null> {
    return getPrismaFromContext(ctx).application.delete(args);
  }
}
