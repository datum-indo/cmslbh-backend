import * as TypeGraphQL from "type-graphql";
import { FindFirstRoleArgs } from "./args/FindFirstRoleArgs";
import { Role } from "../../../models/Role";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Role)
export class FindFirstRoleResolver {
  @TypeGraphQL.Query(_returns => Role, {
    nullable: true
  })
  async findFirstRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstRoleArgs): Promise<Role | null> {
    return getPrismaFromContext(ctx).role.findFirst(args);
  }
}
