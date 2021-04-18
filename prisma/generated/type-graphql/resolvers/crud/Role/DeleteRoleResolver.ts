import * as TypeGraphQL from "type-graphql";
import { DeleteRoleArgs } from "./args/DeleteRoleArgs";
import { Role } from "../../../models/Role";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Role)
export class DeleteRoleResolver {
  @TypeGraphQL.Mutation(_returns => Role, {
    nullable: true
  })
  async deleteRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteRoleArgs): Promise<Role | null> {
    return getPrismaFromContext(ctx).role.delete(args);
  }
}
