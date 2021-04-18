import * as TypeGraphQL from "type-graphql";
import { DeleteRolesTypeArgs } from "./args/DeleteRolesTypeArgs";
import { RolesType } from "../../../models/RolesType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RolesType)
export class DeleteRolesTypeResolver {
  @TypeGraphQL.Mutation(_returns => RolesType, {
    nullable: true
  })
  async deleteRolesType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteRolesTypeArgs): Promise<RolesType | null> {
    return getPrismaFromContext(ctx).rolesType.delete(args);
  }
}
