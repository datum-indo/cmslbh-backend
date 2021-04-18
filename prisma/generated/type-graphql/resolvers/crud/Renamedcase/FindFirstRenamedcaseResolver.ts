import * as TypeGraphQL from "type-graphql";
import { FindFirstRenamedcaseArgs } from "./args/FindFirstRenamedcaseArgs";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Renamedcase)
export class FindFirstRenamedcaseResolver {
  @TypeGraphQL.Query(_returns => Renamedcase, {
    nullable: true
  })
  async findFirstRenamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstRenamedcaseArgs): Promise<Renamedcase | null> {
    return getPrismaFromContext(ctx).renamedcase.findFirst(args);
  }
}
