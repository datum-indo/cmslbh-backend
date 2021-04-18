import * as TypeGraphQL from "type-graphql";
import { DeleteManyRenamedcaseArgs } from "./args/DeleteManyRenamedcaseArgs";
import { Renamedcase } from "../../../models/Renamedcase";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Renamedcase)
export class DeleteManyRenamedcaseResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyRenamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRenamedcaseArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).renamedcase.deleteMany(args);
  }
}
