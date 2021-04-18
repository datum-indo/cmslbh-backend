import * as TypeGraphQL from "type-graphql";
import { DeleteManyApplicationArgs } from "./args/DeleteManyApplicationArgs";
import { Application } from "../../../models/Application";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Application)
export class DeleteManyApplicationResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyApplicationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).application.deleteMany(args);
  }
}
