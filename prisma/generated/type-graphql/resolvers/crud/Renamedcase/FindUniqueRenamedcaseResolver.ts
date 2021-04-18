import * as TypeGraphQL from "type-graphql";
import { FindUniqueRenamedcaseArgs } from "./args/FindUniqueRenamedcaseArgs";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Renamedcase)
export class FindUniqueRenamedcaseResolver {
  @TypeGraphQL.Query(_returns => Renamedcase, {
    nullable: true
  })
  async renamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueRenamedcaseArgs): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).renamedcase.findUnique(args);
  }
}
