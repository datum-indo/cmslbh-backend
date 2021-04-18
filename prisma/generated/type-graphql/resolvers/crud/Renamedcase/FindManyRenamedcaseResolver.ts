import * as TypeGraphQL from "type-graphql";
import { FindManyRenamedcaseArgs } from "./args/FindManyRenamedcaseArgs";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Renamedcase)
export class FindManyRenamedcaseResolver {
  @TypeGraphQL.Query(_returns => [Renamedcase], {
    nullable: false
  })
  async renamedcases(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRenamedcaseArgs): Promise<Renamedcase[]> {
    return getPrismaFromContext(ctx).renamedcase.findMany(args);
  }
}
