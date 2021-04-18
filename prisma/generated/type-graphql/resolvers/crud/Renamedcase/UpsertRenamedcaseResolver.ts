import * as TypeGraphQL from "type-graphql";
import { UpsertRenamedcaseArgs } from "./args/UpsertRenamedcaseArgs";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Renamedcase)
export class UpsertRenamedcaseResolver {
  @TypeGraphQL.Mutation(_returns => Renamedcase, {
    nullable: false
  })
  async upsertRenamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertRenamedcaseArgs): Promise<Renamedcase> {
    return getPrismaFromContext(ctx).renamedcase.upsert(args);
  }
}
