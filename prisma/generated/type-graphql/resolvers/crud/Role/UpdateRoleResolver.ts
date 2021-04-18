import * as TypeGraphQL from "type-graphql";
import { UpdateRoleArgs } from "./args/UpdateRoleArgs";
import { Role } from "../../../models/Role";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Role)
export class UpdateRoleResolver {
  @TypeGraphQL.Mutation(_returns => Role, {
    nullable: true
  })
  async updateRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateRoleArgs): Promise<Role | null> {
    return getPrismaFromContext(ctx).role.update(args);
  }
}
