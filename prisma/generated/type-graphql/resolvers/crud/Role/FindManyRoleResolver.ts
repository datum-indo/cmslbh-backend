import * as TypeGraphQL from "type-graphql";
import { FindManyRoleArgs } from "./args/FindManyRoleArgs";
import { Role } from "../../../models/Role";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Role)
export class FindManyRoleResolver {
  @TypeGraphQL.Query(_returns => [Role], {
    nullable: false
  })
  async roles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRoleArgs): Promise<Role[]> {
    return getPrismaFromContext(ctx).role.findMany(args);
  }
}
