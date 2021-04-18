import * as TypeGraphQL from "type-graphql";
import { CreateRenamedcaseArgs } from "./args/CreateRenamedcaseArgs";
import { Renamedcase } from "../../../models/Renamedcase";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Renamedcase)
export class CreateRenamedcaseResolver {
  @TypeGraphQL.Mutation(_returns => Renamedcase, {
    nullable: false
  })
  async createRenamedcase(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateRenamedcaseArgs): Promise<Renamedcase> {
    return getPrismaFromContext(ctx).renamedcase.create(args);
  }
}
