import * as TypeGraphQL from "type-graphql";
import { UpdateManyApplicationArgs } from "./args/UpdateManyApplicationArgs";
import { Application } from "../../../models/Application";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Application)
export class UpdateManyApplicationResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyApplicationArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).application.updateMany(args);
  }
}
