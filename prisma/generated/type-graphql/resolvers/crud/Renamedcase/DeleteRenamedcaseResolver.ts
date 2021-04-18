import * as TypeGraphQL from "type-graphql";
import { DeleteRenamedcaseArgs } from "./args/DeleteRenamedcaseArgs";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Renamedcase)
export class DeleteRenamedcaseResolver {
  @TypeGraphQL.Mutation(_returns => Renamedcase, {
    nullable: true
  })
  async deleteRenamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteRenamedcaseArgs): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).renamedcase.delete(args);
  }
}
