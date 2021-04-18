import * as TypeGraphQL from "type-graphql";
import { FindUniqueRoleArgs } from "./args/FindUniqueRoleArgs";
import { Role } from "../../../models/Role";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Role)
export class FindUniqueRoleResolver {
  @TypeGraphQL.Query(_returns => Role, {
    nullable: true
  })
  async role(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueRoleArgs): Promise<Role | null> {
    return getPrismaFromContext(ctx).role.findUnique(args);
  }
}
