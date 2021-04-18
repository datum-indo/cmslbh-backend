import * as TypeGraphQL from "type-graphql";
import { UpdateRenamedcaseArgs } from "./args/UpdateRenamedcaseArgs";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Renamedcase)
export class UpdateRenamedcaseResolver {
  @TypeGraphQL.Mutation(_returns => Renamedcase, {
    nullable: true
  })
  async updateRenamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateRenamedcaseArgs): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).renamedcase.update(args);
  }
}
