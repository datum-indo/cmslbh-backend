import * as TypeGraphQL from "type-graphql";
import { UpdateManyRenamedcaseArgs } from "./args/UpdateManyRenamedcaseArgs";
import { Renamedcase } from "../../../models/Renamedcase";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Renamedcase)
export class UpdateManyRenamedcaseResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyRenamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRenamedcaseArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).renamedcase.updateMany(args);
  }
}
