import * as TypeGraphQL from "type-graphql";
import { UpdateRolesTypeArgs } from "./args/UpdateRolesTypeArgs";
import { RolesType } from "../../../models/RolesType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesType)
export class UpdateRolesTypeResolver {
  @TypeGraphQL.Mutation(_returns => RolesType, {
    nullable: true
  })
  async updateRolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateRolesTypeArgs): Promise<RolesType | null> {
    return getPrismaFromContext(ctx).rolesType.update(args);
  }
}
