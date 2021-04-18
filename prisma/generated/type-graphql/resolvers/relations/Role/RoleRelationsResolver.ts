import * as TypeGraphQL from "type-graphql";
import { Role } from "../../../models/Role";
import { RolesType } from "../../../models/RolesType";
import { User } from "../../../models/User";
import { RoleUserArgs } from "./args/RoleUserArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Role)
export class RoleRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => RolesType, {
    nullable: true
  })
  async type(@TypeGraphQL.Root() role: Role, @TypeGraphQL.Ctx() ctx: any): Promise<RolesType | null> {
    return getPrismaFromContext(ctx).role.findUnique({
      where: {
        id: role.id,
      },
    }).type({});
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async User(@TypeGraphQL.Root() role: Role, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RoleUserArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).role.findUnique({
      where: {
        id: role.id,
      },
    }).User(args);
  }
}
