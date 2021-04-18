import * as TypeGraphQL from "type-graphql";
import { UpsertRoleArgs } from "./args/UpsertRoleArgs";
import { Role } from "../../../models/Role";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Role)
export class UpsertRoleResolver {
  @TypeGraphQL.Mutation(_returns => Role, {
    nullable: false
  })
  async upsertRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertRoleArgs): Promise<Role> {
    return getPrismaFromContext(ctx).role.upsert(args);
  }
}
