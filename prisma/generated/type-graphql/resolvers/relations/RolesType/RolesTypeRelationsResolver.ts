import * as TypeGraphQL from "type-graphql";
import { Role } from "../../../models/Role";
import { RolesType } from "../../../models/RolesType";
import { RolesTypeRoleArgs } from "./args/RolesTypeRoleArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesType)
export class RolesTypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Role], {
    nullable: false
  })
  async Role(@TypeGraphQL.Root() rolesType: RolesType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RolesTypeRoleArgs): Promise<Role[]> {
    return getPrismaFromContext(ctx).rolesType.findUnique({
      where: {
        id: rolesType.id,
      },
    }).Role(args);
  }
}
