import * as TypeGraphQL from "type-graphql";
import { CreateRoleArgs } from "./args/CreateRoleArgs";
import { Role } from "../../../models/Role";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Role)
export class CreateRoleResolver {
  @TypeGraphQL.Mutation(_returns => Role, {
    nullable: false
  })
  async createRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateRoleArgs): Promise<Role> {
    return getPrismaFromContext(ctx).role.create(args);
  }
}
